class AddPrimaryToPhoto < ActiveRecord::Migration
  def change
    add_column :listing_photos, :is_header, :boolean
  end
end
