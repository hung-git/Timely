class RemoveColumnsFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :city
    remove_column :events, :province
    remove_column :events, :country
  end
end
