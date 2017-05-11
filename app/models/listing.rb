class Listing < ActiveRecord::Base
  has_one :listing_detail
  has_many :listing_photos
  has_one :header_photo, -> { where(is_header: true) }, class_name: "ListingPhoto"

  scope :featured, -> { where(featured: true) }
  scope :available, -> { where(available: true) }

  def header_title
    "[$#{'%.02f' % price}] #{title} - #{description}"
  end
end