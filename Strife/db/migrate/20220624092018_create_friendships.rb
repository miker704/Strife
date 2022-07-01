class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null:false
      # t.boolean :accepted, default: false, null:false
      t.integer :friend_request_status, null: false
      t.timestamps
    end
    add_index :friendships, [:user_id, :friend_id], :unique =>  true
    # add_index :friendships, :accepted
    add_index :friendships, [:user_id, :friend_request_status]
    #Ex:- add_index("admin_users", "username")
  end
end
