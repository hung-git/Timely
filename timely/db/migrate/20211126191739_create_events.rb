class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :start_date
      t.datetime :end_date
      t.string :location
      t.text :description
      t.string :city
      t.string :province
      t.string :country
      t.float :latitude
      t.float :longitude
      t.string :guest_list

      t.timestamps
    end
  end
end
