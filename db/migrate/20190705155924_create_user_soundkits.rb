class CreateUserSoundkits < ActiveRecord::Migration[5.2]
  def change
    create_table :user_soundkits do |t|
      t.integer :user_id
      t.integer :soundkit_id
      t.timestamps
    end
  end
end
