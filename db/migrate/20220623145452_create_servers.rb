class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :server_owner_id, null: false
      t.string :server_name, null: false
      t.boolean :public, null: false
      t.string :server_icon
      t.string :invite_code
      t.timestamps
    end
    add_index :servers, :server_owner_id
    add_index :servers, :server_name
    add_index :servers, :invite_code, :unique => true
    add_index :servers, [:server_owner_id, :server_name], :unique => true

    #Ex:- add_index("admin_users", "username")

  end
end
