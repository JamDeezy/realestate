# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# ListingDetail.create [
#   {}
# ]

# ListingDetail.create [
#   { bathroom: 2, bedroom: 2, area: 1000, parking: true, balcony: true, furnished: false },
#   { bathroom: 2, bedroom: 2, area: 1000, parking: true, balcony: true, furnished: false }
# ]

Listing.create [
  {title: "Expensive place", description: "A really expensive place", price: 10000.00, postal_code: "M5V2A9", address_one: "123 wtf street", address_two: "suite 123", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: true, featured: true},
  {title: "Very Expensive place", description: "A really really expensive place", price: 1000000.00, postal_code: "M5V2A9", address_one: "124 wtf street", address_two: "suite 124", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: true, featured: true},
  {title: "Taken Expensive place", description: "A really expensive place that has been leased", price: 10000.00, postal_code: "M5V2A9", address_one: "123 wtf street", address_two: "suite 123", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: false, featured: false},
  {title: "Cheap ass place", description: "A really fucking cheap place", price: 10.00, postal_code: "M5V2A9", address_one: "123 wtf street", address_two: "suite 123", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: true, featured: true},
  {title: "Taken Cheap ass place", description: "A really fucking cheap place that has been leased", price: 10.00, postal_code: "M5V2A9", address_one: "123 wtf street", address_two: "suite 123", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: false, featured: false},
  {title: "Reasonable place", description: "A reasonable place", price: 1600.00, postal_code: "M5V2A9", address_one: "123 wtf street", address_two: "suite 123", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: true, featured: true},
  {title: "Taken Reasonable place", description: "A reasonable place that has been leased", price: 1600.00, postal_code: "M5V2A9", address_one: "123 wtf street", address_two: "suite 123", neighbourhood: "The projects", move_in: 1.month.from_now, contact: "41688888888", available: false, featured: false}
]


Listing.all.each do |listing|

  ListingPhoto.create(
    listing_id: listing.id,
    url: "//www.dashpropertymanagement.com/cmsb/uploads/lobby_014.jpg",
    is_header: true
  )

end

