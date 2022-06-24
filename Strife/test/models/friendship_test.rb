# == Schema Information
#
# Table name: friendships
#
#  id                    :bigint           not null, primary key
#  accepted              :boolean          default(FALSE), not null
#  friend_a_Id           :integer          not null
#  friend_b_Id           :integer          not null
#  friend_request_status :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
# Indexes
#
#  index_friendships_on_accepted                     (accepted)
#  index_friendships_on_friend_a_Id_and_friend_b_Id  (friend_a_Id,friend_b_Id) UNIQUE
#  index_friendships_on_friend_request_status        (friend_request_status)
#
require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
