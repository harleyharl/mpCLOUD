class DropRecordingsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :recordings
  end
end
