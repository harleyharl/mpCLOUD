class RemoveDestroyColumnFromSounds < ActiveRecord::Migration[5.2]
  def change
    remove_column :sounds, :_destroy, :integer
  end
end
