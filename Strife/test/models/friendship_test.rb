# == Schema Information
#
# Table name: friendships
#
#  id                    :bigint           not null, primary key
#  accepted              :boolean          default(FALSE), not null
#  friend_request_status :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  user1_id              :integer          not null
#  user2_id              :integer          not null
#
# Indexes
#
#  index_friendships_on_accepted               (accepted)
#  index_friendships_on_friend_request_status  (friend_request_status)
#  index_friendships_on_user1_id_and_user2_id  (user1_id,user2_id) UNIQUE
#
require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
