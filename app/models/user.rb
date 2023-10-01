# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  birthday        :date             not null
#  color_tag       :integer          not null
#  email           :string           not null
#  online          :boolean          default(FALSE), not null
#  password_digest :string           not null
#  phone_number    :string
#  profile_pic_url :string
#  session_token   :string           not null
#  strife_id_tag   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email                       (email) UNIQUE
#  index_users_on_session_token               (session_token) UNIQUE
#  index_users_on_username                    (username)
#  index_users_on_username_and_strife_id_tag  (username,strife_id_tag) UNIQUE
#
class User < ApplicationRecord

    # validates :email, :username, :password_digest, :birthday, :session_token, presence: true
    # validates :username, uniqueness: true, length: {minimum: 2, maximum: 50}
    # validates :email, uniqueness: true
    # validates :phone, uniqueness: true, allow_nil: true
    # validates :password_digest, :id_tag, presence: true


    validates :email, :username, :password_digest, :session_token, :strife_id_tag, :birthday, presence: true
    validates :username, uniqueness: {scope: :strife_id_tag}
    validates :username, length: {minimum:2, maximum:32}
    validates :email, uniqueness: true
    validates :email, format: {with: /\A[\w+-.]+@[a-z\d-]+(.[a-z\d-]+)*.[a-z]+\z/i, message: "Not well formed email address"}, 
    length: {maximum:320, too_long: "Must be 320 or fewer in Length"},uniqueness: {case_sensitive: false}
    validates :phone_number, format:{with: /\+\d{1}\d{3}\d{3}\d{4}/, message: "is invalid, please confirm that it is correct."},
    length: {is: 12, message: "is not of 10 digits long" }, uniqueness: true, allow_nil: true
    validates :online, inclusion: {in: [true,false]}
    # /\+\d{1}-\d{3}-\d{3}-\d{4}/ this is normal phone number format with dashes discord doesnt use the dashes however
    # has_one_attached :profile_pic_url 
    #-- > this requires acxtive storage 
    has_one_attached :photo
    has_one_attached :user_Banner
    # too_long: "Must be between 2 and 32 in length", too_short: "Must be between 2 and 32 in length"
   # Age Error user must be 13 years to sign up
    # too_long: "Username Must be between 2 and 32 in length", too_short: "Username Must be between 2 and 32 in length"}
    # user ownership
    #user ownership of servers
    has_many :owned_servers, class_name: "Server", foreign_key: "server_owner_id", dependent: :destroy
    # user membership to servers
    has_many :server_memberships, class_name: "ServerMembership", foreign_key: "user_id", dependent: :destroy

    #user dm_server_membership
    has_many :dm_memberships, class_name: "DmMember", foreign_key: "dm_member_id", dependent: :destroy
    #user dm_servers
    has_many :owned_dm_servers, class_name: "Dmserver", foreign_key: "owner_id"
    has_many :dm_servers, through: :dm_memberships, source: :dm_server  # < ---- Dm Server Membership (to owned dmServers and dmServers owned by others)

    # messages
    has_many :messages, class_name: "Message", foreign_key: "author_id", dependent: :destroy
    # dm messages
    has_many :dm_messages, class_name: "DmMessage", foreign_key: "sender_id", dependent: :destroy

    has_many :dm_members, through: :dm_servers, source: :members
    
    
    #has-many relationships
    #servers -> has many servers joined through server memberships
    has_many :servers_joined, through: :server_memberships, source: :server #< ---- Server Membership includes servers Owned and server not owned
    
    #channels
    
    #wrong user cant own a channel direectly thewy can own one trhrough a server they own 
    # has_many :owned_channels, class_name: "Channel", foreign_key: "reference_id"
    has_many :channel_memberships, class_name: "ChannelMembership", foreign_key: "receiver_id"
    
    has_many :server_co_members, through: :servers_joined, source: :members
    
    # has_many :channels_joined, through: :servers_joined, source: :channels
    has_many :channel_joined, through: :channel_memberships, source: :channel


    
    has_many :owned_channels, through: :owned_servers, source: :channels
    

    # friends
    # has_many :friendships, class_name: "Friendship", foreign_key: "friend_a_Id"
    has_many :friendships
    

    #friend req works as 0 no requests 1 requested 2 pending request revert to 0 if denied or 3 if accepted
    has_many :friends, 
        -> {where friendships: { friend_request_status: 3}},
        through: :friendships,
        source: :friend,
        dependent: :destroy
    
    has_many :outgoing_friend_requests, 
        -> {where friendships: { friend_request_status: 1}},
        through: :friendships,
         source: :friend, 
         dependent: :destroy

    has_many :incoming_friend_requests, 
        -> {where friendships: { friend_request_status: 2}},
        through: :friendships, 
        source: :friend, 
        dependent: :destroy


    has_many :blocked_users,
    -> {where friendships: { friend_request_status: -1}},
        through: :friendships, 
        source: :friend, 
        dependent: :destroy
    
    has_many :blocked_by,
    -> {where friendships: { friend_request_status: -2}},
        through: :friendships, 
        source: :friend, 
        dependent: :destroy


    def friendship_status(friend)
        relationShip = self.friendships.find_by(friend_id: friend.id)
        relationShip ? relationShip.friend_request_status : 0
    end


    #user auth and strife tag generation

    
    validates :password, length: {minimum: 8, maximum: 72, allow_nil: true}
    validates :password_digest, presence: true
    validates :session_token, uniqueness: true
    attr_reader :password

    after_initialize :ensure_session_token
    after_initialize :ensure_strife_id_tag
    after_initialize :ensure_color_tag
    after_create :create_Friendship_With_Bot
    after_create :create_membership_to_Strife_Main
    # SPIRE

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password =password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        return BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end


    # discord has a number tag that idenifies a user based on a certain catergories
    #  they are not unique as millions use discord yet tags are only from #0001-
    #  #10000 discord uses a users username in part with the number tag
    # ie. mike#0001 is different from michael#0001 they are treated as different 
    # discord tag
    def ensure_strife_id_tag
        self.strife_id_tag ||= rand(1000..10000).to_s
    end
    # future fix create another function to make this a string and add a # along withe users name



    # allows the text coloring to be different depending on if an account is a person or a chat bot
    # this also allows a user to change there text color when messaging however bots can
    # have only one text color dedicated for itself for now this is to color the default pfp svg image
    def ensure_color_tag
        self.color_tag ||= rand(1..9).to_s
    end


    def create_Friendship_With_Bot
        if self.id != 1
         Friendship.create!(friend_id: 1, user_id: self.id, friend_request_status: 3);
         Friendship.create!(friend_id: self.id, user_id: 1, friend_request_status: 3);

        end
    end

    def create_membership_to_Strife_Main
        if self.id != 1
        ServerMembership.create!(user_id: self.id, server_id: 1)
        end
    end

    def joined_date
        # attributes['created_at'].strftime("%m/%d/%Y")
        attributes['created_at'].strftime("%b %d, %Y")
    end


end
