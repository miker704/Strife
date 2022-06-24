# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  server_id  :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_server_memberships_on_server_id              (server_id)
#  index_server_memberships_on_server_id_and_user_id  (server_id,user_id) UNIQUE
#  index_server_memberships_on_user_id                (user_id)
#
class ServerMembership < ApplicationRecord

    validates :user_id, :server_id, presence: true;
    validates :user_id, uniqueness: {scope: :server_id}
    belongs_to :server, class_name: "Server", foreign_key: "server_id"
    belongs_to :user, class_name: "User", foreign_key: "user_id"

end
