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
class ChannelMembership < ApplicationRecord
    validates :channel_id, :receiver_id, presence: true
    belongs_to :channel, class_name: "Channel", foreign_key: "channel_id"
    belongs_to :member, class_name: "User", foreign_key: "receiver_id"
end
