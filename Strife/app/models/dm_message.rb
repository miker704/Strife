# == Schema Information
#
# Table name: dm_messages
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  dm_server_id      :integer          not null
#  parent_message_id :integer
#  sender_id         :integer          not null
#
# Indexes
#
#  index_dm_messages_on_dm_server_id       (dm_server_id)
#  index_dm_messages_on_parent_message_id  (parent_message_id)
#  index_dm_messages_on_sender_id          (sender_id)
#
class DmMessage < ApplicationRecord
end
