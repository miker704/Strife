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
require 'test_helper'

class ChannelMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
