class AddIsCompleteToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :is_complete, :boolean, default: false
  end
end
