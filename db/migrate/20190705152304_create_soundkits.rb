class CreateSoundkits < ActiveRecord::Migration[5.2]
  def change
    create_table :soundkits do |t|
      t.timestamps
    end
  end
end
