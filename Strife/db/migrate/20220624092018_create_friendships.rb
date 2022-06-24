class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :friend_a_Id, null: false
      t.integer :friend_b_Id, null:false
      t.boolean :accepted, default: false, null:false
      t.string :friend_request_status, null: false
      t.timestamps
    end
    add_index :friendships, [:friend_a_Id, :friend_b_Id], :unique =>  true
    add_index :friendships, :accepted
    add_index :friendships, :friend_request_status
    #Ex:- add_index("admin_users", "username")
  end
end
