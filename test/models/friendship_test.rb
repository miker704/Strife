# == Schema Information
#
# Table name: friendships
#
#  id                    :bigint           not null, primary key
#  friend_request_status :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  friend_id             :integer          not null
#  user_id               :integer          not null
#
# Indexes
#
#  index_friendships_on_user_id_and_friend_id              (user_id,friend_id) UNIQUE
#  index_friendships_on_user_id_and_friend_request_status  (user_id,friend_request_status)
#
require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
