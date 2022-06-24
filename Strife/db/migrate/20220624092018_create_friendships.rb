class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user1_id, null: false
      t.integer :user2_id, null:false
      t.boolean :accepted, default: false, null:false
      t.string :friend_request_status, null: false
      t.timestamps
    end
    add_index :friendships, [:user1_id,:user2_id], :unique =>  true
    add_index :friendships, :accepted
    add_index :friendships, :friend_request_status
    #Ex:- add_index("admin_users", "username")
  end
end
