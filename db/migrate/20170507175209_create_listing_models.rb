class CreateListingModels < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title
      t.text :description
      t.decimal :price, precision: 2
      t.string :postal_code
      t.string :address_one
      t.string :address_two
      t.string :neighbourhood
      t.date :move_in
      t.string :contact
      t.boolean :available
      t.boolean :featured

      t.timestamps
    end

    create_table :listing_details do |t|
      t.belongs_to :listing, index: true
      t.decimal :bathroom
      t.decimal :bedroom
      t.decimal :area
      t.boolean :parking
      t.boolean :furnished
      t.boolean :balcony

      t.timestamps
    end
  end
end
