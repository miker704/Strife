# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  birthday        :date             not null
#  color_tag       :integer          not null
#  email           :string           not null
#  online          :boolean          default(FALSE), not null
#  password_digest :string           not null
#  phone_number    :string
#  profile_pic_url :string
#  session_token   :string           not null
#  strife_id_tag   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email                       (email) UNIQUE
#  index_users_on_session_token               (session_token) UNIQUE
#  index_users_on_username                    (username)
#  index_users_on_username_and_strife_id_tag  (username,strife_id_tag) UNIQUE
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
