class ChangeListingIdOnPhotos < ActiveRecord::Migration
  def change
    rename_column :listing_photos, :listings_id, :listing_id
  end
end
