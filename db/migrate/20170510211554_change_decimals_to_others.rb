class ChangeDecimalsToOthers < ActiveRecord::Migration
  def change
    change_column :listings, :price, :float, precision: 2
    change_column :listing_details, :bathroom, :float
    change_column :listing_details, :bedroom, :float
    change_column :listing_details, :area, :float
  end
end
