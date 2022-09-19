class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :server_id, null: false
      t.string  :channel_name, null: false
      t.integer :channel_type, null: false
      t.timestamps
    end
    add_index :channels, [:channel_name, :server_id], unique: true
    add_index :channels, [:server_id]
    #Ex:- add_index("admin_users", "username")
  end
end
