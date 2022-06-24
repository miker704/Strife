class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|
      t.integer :channel_id , null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end
  end
end
