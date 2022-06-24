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
#  phone_number    :decimal(, )
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
    # validates :phone, uniqueness: true, allow_nil: true\
    # validates :password_digest, :id_tag, presence: true


    validates :email, :username, :password_digest, :session_token, :strife_id_tag, :birthday, presence: true
    validates :username, uniqueness: {scope: :strife_id_tag}
    validates :email, uniqueness: true
    validates :phone_number, uniqueness: true, allow_nil: true



    # user ownership
    #user ownership of servers
    has_many :owned_servers, class_name: "Server", foreign_key: "server_owner_id", dependent: :destroy
    # user membership to servers
    has_many :server_memberships, class_name: "ServerMembership", foreign_key: "reference_id", dependent: :destroy

    # messages
    has_many :messages, class_name: "Message", foreign_key: "sender_id", dependent: :destroy

    has_many :friends, class_name: "friend", foreign_key: "reference_id", dependent: :destroy





    #user auth and strife tag generation

    validates :password, length: {minimum: 6, allow_nil: true}
    validates :password_digest, presence: true
    validates :session_token, uniqueness: true
    attr_reader :password

    after_initialize :ensure_session_token
    after_initialize :ensure_strife_id_tag
    after_initialize :ensure_color_tag
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
    # have only one text color dedicated for itself
    def ensure_color_tag
        self.color_tag ||= rand(1..5).to_s
    end


    


end
