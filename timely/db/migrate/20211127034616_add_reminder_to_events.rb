class AddReminderToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :reminder, :boolean, default: false
  end
end
