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
class Friendship < ApplicationRecord
    validates :friend_a_Id, :friend_b_Id, :friend_request_status, presence: true
    validates :accepted, inclusion: {in: [true,false]}
    validates :friend_request_status, inclusion: {in: %w(ongoing incoming accepted)}

    belongs_to :friend, class_name: "User", foreign_key: "friend_b_Id"
    belongs_to :user, class_name: "User", foreign_key: "friend_a_Id"

    private
    def prevent_self_friending
        errors.add(:friend_a_Id, 'You cant add yourself!') if friend_a_Id == friend_b_Id
    end
end
