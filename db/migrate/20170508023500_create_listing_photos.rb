class CreateListingPhotos < ActiveRecord::Migration
  def change
    create_table :listing_photos do |t|
      t.belongs_to :listing
      t.string :url
      t.string :imgur_hash
      t.string :imgur_delete_hash
    end
  end
end
