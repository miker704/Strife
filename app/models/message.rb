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
    validates :author_id, :channel_id, :body, presence: true
    validates :body, length: {minimum:1, maximum:2000, too_long: "Subscribe to Strife Nitro to send longer messages"}


    belongs_to :user, class_name: "User", foreign_key: "author_id"
    belongs_to :channel, class_name: "Channel", foreign_key: "channel_id"

    def message_Info
        attributes['created_at'].strftime("%m/%d/%Y %H:%M")
    end

    def message_time_stamp_slashes
        est = Time.zone.utc_to_local(self.created_at)
        est = est + 4.hours
        return est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
    end


end
