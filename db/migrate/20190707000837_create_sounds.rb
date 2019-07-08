class CreateSounds < ActiveRecord::Migration[5.2]
  def change
    create_table :sounds do |t|
      t.string :name
      t.string :url
      t.integer :soundkit_id
      t.timestamps
    end
  end
end
