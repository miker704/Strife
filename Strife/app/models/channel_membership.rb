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
end
