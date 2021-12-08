class RemoveIsCompleteFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :is_complete
  end
end
