# == Schema Information
#
# Table name: servers
#
#  id              :bigint           not null, primary key
#  invite_code     :string
#  public          :boolean          not null
#  server_icon     :string
#  server_name     :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  server_owner_id :integer          not null
#
# Indexes
#
#  index_servers_on_invite_code                      (invite_code) UNIQUE
#  index_servers_on_server_name                      (server_name)
#  index_servers_on_server_owner_id                  (server_owner_id)
#  index_servers_on_server_owner_id_and_server_name  (server_owner_id,server_name) UNIQUE
#
require 'test_helper'

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
