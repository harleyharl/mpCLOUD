class AddDestroyColumnToSounds < ActiveRecord::Migration[5.2]
  def change
    add_column :sounds, :_destroy, :integer 
  end
end
