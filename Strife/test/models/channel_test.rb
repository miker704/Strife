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
require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
