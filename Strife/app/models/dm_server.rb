# == Schema Information
#
# Table name: dm_servers
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
# Indexes
#
#  index_dm_servers_on_owner_id  (owner_id)
#
class DmServer < ApplicationRecord
    validates :owner_id, presence: true
    belongs_to :user, class_name: "User", foreign_key: "owner_id"
    has_many :dm_messages, class_name: "DmMessage", foreign_key: "dm_server_id", dependent: :destroy
    has_many :dm_members, class_name: "DMmember", foreign_key: "dm_server_id"
    has_many :users, through: :dm_members, source: :user
end
