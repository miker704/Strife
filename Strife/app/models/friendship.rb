# == Schema Information
#
# Table name: friendships
#
#  id                    :bigint           not null, primary key
#  friend_request_status :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  friend_id             :integer          not null
#  user_id               :integer          not null
#
# Indexes
#
#  index_friendships_on_friend_request_status  (friend_request_status)
#
class Friendship < ApplicationRecord
    validates :user_id, :friend_id, :friend_request_status, presence: true
    # validates :accepted, inclusion: {in: [true,false]}
    validates :friend_request_status, inclusion: {in: %w(ongoing incoming accepted)}
    # validates :friend_a_Id, uniqueness: {scope: :friend_b_Id}
    validate :prevent_self_friending



    belongs_to :user, class_name: "User", foreign_key: "user_id"
    belongs_to :friend, class_name: "User", foreign_key: "friend_id"

    private
    def prevent_self_friending
        errors.add(:user_id, 'You cant add yourself!') if user_id == friend_id
    end
end
