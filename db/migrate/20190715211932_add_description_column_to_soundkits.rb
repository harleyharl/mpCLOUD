class AddDescriptionColumnToSoundkits < ActiveRecord::Migration[5.2]
  def change
    add_column :soundkits, :description, :string
  end
end
