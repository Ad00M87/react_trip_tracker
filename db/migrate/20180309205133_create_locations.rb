class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.belongs_to :trip, foreign_key: true
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
