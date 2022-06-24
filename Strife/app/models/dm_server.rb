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
end
