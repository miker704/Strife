class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :channel_id, null: false
      t.integer :author_id, null: false
      t.integer :parent_message_id
      t.integer :replier_id
      t.text  :body, null: false

      t.timestamps
    end

    add_index :messages, :channel_id
    add_index :messages, :author_id
    add_index :messages, :parent_message_id
    #Ex:- add_index("admin_users", "username")
    #Ex:- add_index("admin_users", "username")
  end
end
