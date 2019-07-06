class AddUserIdAndTitleToRecordings < ActiveRecord::Migration[5.2]
  def change
    add_column :recordings, :title, :string
    add_column :recordings, :user_id, :integer
  end
end
