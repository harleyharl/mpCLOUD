class AddUrlAndNameColumnToSoundkits < ActiveRecord::Migration[5.2]
  def change
    add_column :soundkits, :url, :string
    add_column :soundkits, :name, :string
  end
end
