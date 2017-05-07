class Listing < ActiveRecord::Base
  has_one :listing_detail

  scope :featured, -> { where(featured: true) }
  scope :available, -> { where(available: true) }
end