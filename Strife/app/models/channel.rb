# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
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


    belongs_to :server, class_name: "Server", foreign_key: "server_id"
    has_many :messages, class_name: "Message", foreign_key: "channel_id", dependent: :destroy
    has_many :channel_members, class_name: "ChannelMembership", foreign_key: "channel_id"
    has_many :members, through: :channel_members, source: :member

    after_create :create_Channel_Membership
    after_create :create_Welcome_Message

    def create_Welcome_Message
        Message.create(channel_id: self.id, author_id: 1, body: "Welcome to ##{self.channel_name} channel")
    end
    def create_Channel_Membership
        ChannelMembership.create(channel_id: self.id, receiver_id: self.server.server_owner_id)
    end
end
