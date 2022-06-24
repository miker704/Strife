# == Schema Information
#
# Table name: messages
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  author_id         :integer          not null
#  channel_id        :integer          not null
#  parent_message_id :integer
#  replier_id        :integer
#
# Indexes
#
#  index_messages_on_author_id          (author_id)
#  index_messages_on_channel_id         (channel_id)
#  index_messages_on_parent_message_id  (parent_message_id)
#
class Message < ApplicationRecord
end
