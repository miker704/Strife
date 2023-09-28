# == Schema Information
#
# Table name: servers
#
#  id              :bigint           not null, primary key
#  invite_code     :string
#  public          :boolean          not null
#  server_icon     :string
#  server_name     :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  server_owner_id :integer          not null
#
# Indexes
#
#  index_servers_on_invite_code                      (invite_code) UNIQUE
#  index_servers_on_server_name                      (server_name)
#  index_servers_on_server_owner_id                  (server_owner_id)
#  index_servers_on_server_owner_id_and_server_name  (server_owner_id,server_name) UNIQUE
#
class Server < ApplicationRecord

    validates :server_owner_id, presence: true
    validates :server_name, presence: true, length: {minimum:2, maximum:100}
    validates :public, inclusion: {in:[true,false]}

    validates :server_owner_id, uniqueness: {scope: :server_name, message: 'You already have a server with that name already'}


    belongs_to :serverOwner, class_name: "User", foreign_key: "server_owner_id"
    has_many :channels, class_name: "Channel", foreign_key: "server_id", dependent: :destroy
    has_many :server_members, class_name: "ServerMembership", foreign_key: "server_id", dependent: :destroy
    has_many :members, through: :server_members, source: :user


    has_one_attached :server_Icon
    has_one_attached :server_banner
    has_one_attached :invite_splash

    after_create :create_Default_Channel
    after_create :create_OwnerShip
    after_create :generate_Server_Invitation_Code





    # ensure that with the creation of a new server there must be one channel called general
    def create_Default_Channel
        general_channel = Channel.create(server_id: self.id, channel_name: "general", channel_type: 1)
       first_Channel_membership = ChannelMembership.create!(channel_id: general_channel.id, receiver_id: self.server_owner_id)
    end

    #this is to ensure that that the the owner of the server is joined as a member 
    def create_OwnerShip
        ServerMembership.create!(user_id: self.server_owner_id, server_id: self.id)
    end

    # functions to generate a new invite code


    def generate_Server_Invitation_Code
        self.invite_code = self.new_Server_Invite_Code
        while Server.find_by(invite_code: invite_code)
            self.invite_code=new_Server_Invite_Code
        end
        save!
        return invite_code
    end

    # generate some hexdecimal string of 8 characters long params takes half the desired length
    # to give a string that is twice the length of the passed in params
    def new_Server_Invite_Code
        return 'https://strife.gg/'+SecureRandom.hex(4)
    end

    def reset_Server_Invite_Code
         generate_Server_Invitation_Code
         save!
         return invite_code
    end
end
