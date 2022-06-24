# == Schema Information
#
# Table name: dm_members
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  dm_member_id :integer          not null
#  dm_server_id :integer          not null
#
# Indexes
#
#  index_dm_members_on_dm_member_id                   (dm_member_id)
#  index_dm_members_on_dm_server_id                   (dm_server_id)
#  index_dm_members_on_dm_server_id_and_dm_member_id  (dm_server_id,dm_member_id) UNIQUE
#
class DmMember < ApplicationRecord
end
