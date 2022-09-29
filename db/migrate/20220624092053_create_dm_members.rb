class CreateDmMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_members do |t|
      t.integer :dm_server_id , null: false
      t.integer :dm_member_id, null: false

      t.timestamps
    end
    add_index :dm_members, [:dm_server_id,:dm_member_id], :unique => true
    add_index :dm_members, :dm_server_id
    add_index :dm_members, :dm_member_id
  end
end
