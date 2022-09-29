# == Schema Information
#
# Table name: channel_memberships
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  channel_id  :integer          not null
#  receiver_id :integer          not null
#
# Indexes
#
#  index_channel_memberships_on_channel_id_and_receiver_id  (channel_id,receiver_id) UNIQUE
#
class ChannelMembership < ApplicationRecord
    validates :channel_id, :receiver_id, presence: true
    validates :receiver_id, uniqueness: {scope: :channel_id}
    belongs_to :channel, class_name: "Channel", foreign_key: "channel_id"
    belongs_to :member, class_name: "User", foreign_key: "receiver_id"
end
