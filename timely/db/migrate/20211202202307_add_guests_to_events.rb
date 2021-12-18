class AddGuestsToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :guests, :string
  end
end
