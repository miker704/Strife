# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_30_230705) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "channel_memberships", force: :cascade do |t|
    t.integer "channel_id", null: false
    t.integer "receiver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "channels", force: :cascade do |t|
    t.integer "server_id", null: false
    t.string "channel_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_name", "server_id"], name: "index_channels_on_channel_name_and_server_id", unique: true
    t.index ["server_id"], name: "index_channels_on_server_id"
  end

  create_table "dm_members", force: :cascade do |t|
    t.integer "dm_server_id", null: false
    t.integer "dm_member_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dm_member_id"], name: "index_dm_members_on_dm_member_id"
    t.index ["dm_server_id", "dm_member_id"], name: "index_dm_members_on_dm_server_id_and_dm_member_id", unique: true
    t.index ["dm_server_id"], name: "index_dm_members_on_dm_server_id"
  end

  create_table "dm_messages", force: :cascade do |t|
    t.integer "dm_server_id", null: false
    t.integer "sender_id", null: false
    t.integer "parent_message_id"
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dm_server_id"], name: "index_dm_messages_on_dm_server_id"
    t.index ["parent_message_id"], name: "index_dm_messages_on_parent_message_id"
    t.index ["sender_id"], name: "index_dm_messages_on_sender_id"
  end

  create_table "dm_servers", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_dm_servers_on_owner_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "friend_id", null: false
    t.integer "friend_request_status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true
    t.index ["user_id", "friend_request_status"], name: "index_friendships_on_user_id_and_friend_request_status"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "channel_id", null: false
    t.integer "author_id", null: false
    t.integer "parent_message_id"
    t.integer "replier_id"
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["channel_id"], name: "index_messages_on_channel_id"
    t.index ["parent_message_id"], name: "index_messages_on_parent_message_id"
  end

  create_table "server_memberships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id", "user_id"], name: "index_server_memberships_on_server_id_and_user_id", unique: true
    t.index ["server_id"], name: "index_server_memberships_on_server_id"
    t.index ["user_id"], name: "index_server_memberships_on_user_id"
  end

  create_table "servers", force: :cascade do |t|
    t.integer "server_owner_id", null: false
    t.string "server_name", null: false
    t.boolean "public", null: false
    t.string "server_icon"
    t.string "invite_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["invite_code"], name: "index_servers_on_invite_code", unique: true
    t.index ["server_name"], name: "index_servers_on_server_name"
    t.index ["server_owner_id", "server_name"], name: "index_servers_on_server_owner_id_and_server_name", unique: true
    t.index ["server_owner_id"], name: "index_servers_on_server_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "online", default: false, null: false
    t.string "profile_pic_url"
    t.string "strife_id_tag", null: false
    t.integer "color_tag", null: false
    t.date "birthday", null: false
    t.decimal "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username", "strife_id_tag"], name: "index_users_on_username_and_strife_id_tag", unique: true
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
