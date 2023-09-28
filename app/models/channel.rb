# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
#  channel_type :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  server_id    :integer          not null
#
# Indexes
#
#  index_channels_on_channel_name_and_server_id  (channel_name,server_id) UNIQUE
#  index_channels_on_server_id                   (server_id)
#
class Channel < ApplicationRecord
    validates :channel_name, :server_id, presence: true
    validates :channel_name, uniqueness: {scope: :server_id, message: 'Only one channel in a server can have that name'}
    validates :channel_name, length: {minimum:1, maximum:100}
    validates :channel_type, inclusion: {in: [1,2]}

    belongs_to :server, class_name: "Server", foreign_key: "server_id"
    has_many :messages, class_name: "Message", foreign_key: "channel_id", dependent: :destroy
    has_many :channel_members, class_name: "ChannelMembership", foreign_key: "channel_id", dependent: :destroy
    has_many :members, through: :channel_members, source: :member

    after_create :create_Channel_Membership
    after_create :create_Welcome_Message

    def create_Welcome_Message
        if self.channel_type == 1
            Message.create(channel_id: self.id, author_id: 1, body: "Welcome to ##{self.channel_name}!")
        elsif self.channel_type == 2
            Message.create(channel_id: self.id, author_id: 1, 
            body: "$TR!F3 N!TR0 is required to allow members of your server and yourself access to Voice & Video call channels. Voice/Video Calls are not available without $TR!F3 N!TR0.")
        end

    end
    def create_Channel_Membership
       # channel memberships wont be fully used right now
        # @server_members = self.server.members
        # if channel_name != "general" 
        #     @server_members.each do |member|
        #         ChannelMembership.create(channel_id: self.id, receiver_id: member.id)
        #     end
        # end

        if channel_name != "general" 
        ChannelMembership.create(channel_id: self.id, receiver_id: self.server.server_owner_id)
        end
    end
end
