class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :online, default: false, null: false
      t.string :profile_pic_url
      t.string :id_tag, null: false
      t.integer :color_id, null: false
      t.date :birthday, null: false
      t.decimal :phone
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email, :unique =>  true
    add_index :users, :session_token, :unique => true
    add_index :users, [:username, :id_tag], :unique =>  true


    #Ex:- add_index("admin_users", "username")
  end
end
