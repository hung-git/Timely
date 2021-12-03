class RemoveStartDateFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :start_date
  end
end
