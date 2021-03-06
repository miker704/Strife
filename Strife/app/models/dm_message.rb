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
    # validates :dm_server_id, :sender_id, :body, :parent_message_id, presence: true
    validates :dm_server_id, :sender_id, :body, presence: true
    validates :body, length: {in: 1..2000, too_long: "Please Subscribe to Strife Nitro to send messages larger than 2000 characters"}
    belongs_to :message_creator, class_name: "User", foreign_key: "sender_id"
    belongs_to :dm_server, class_name: "DmServer", foreign_key: "dm_server_id"

end
