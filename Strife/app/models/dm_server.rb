# == Schema Information
#
# Table name: dm_servers
#
#  id             :bigint           not null, primary key
#  dm_server_name :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  owner_id       :integer          not null
#
# Indexes
#
#  index_dm_servers_on_owner_id  (owner_id)
#
class DmServer < ApplicationRecord
    validates :owner_id, presence: true
    # validates :dm_server_name, allow_nil: true
    belongs_to :user, class_name: "User", foreign_key: "owner_id"
    has_many :dm_messages, class_name: "DmMessage", foreign_key: "dm_server_id", dependent: :destroy
    has_many :dm_members, class_name: "DmMember", foreign_key: "dm_server_id"
    has_many :members, through: :dm_members, source: :member
    after_create :add_dm_members

    def add_dm_members
        self.member_ids.each do |memberId| 
            DmMember.create!(dm_server_id: self.id, dm_member_id: memberId)
        end
    end


  


end
