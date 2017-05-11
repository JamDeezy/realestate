# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170510212909) do

  create_table "listing_details", force: :cascade do |t|
    t.integer  "listing_id", limit: 4
    t.float    "bathroom",   limit: 24
    t.float    "bedroom",    limit: 24
    t.float    "area",       limit: 24
    t.boolean  "parking"
    t.boolean  "furnished"
    t.boolean  "balcony"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "listing_details", ["listing_id"], name: "index_listing_details_on_listing_id", using: :btree

  create_table "listing_photos", force: :cascade do |t|
    t.integer "listing_id",        limit: 4
    t.string  "url",               limit: 255
    t.string  "imgur_hash",        limit: 255
    t.string  "imgur_delete_hash", limit: 255
    t.boolean "is_header"
  end

  create_table "listings", force: :cascade do |t|
    t.string   "title",         limit: 255
    t.text     "description",   limit: 65535
    t.float    "price",         limit: 24
    t.string   "postal_code",   limit: 255
    t.string   "address_one",   limit: 255
    t.string   "address_two",   limit: 255
    t.string   "neighbourhood", limit: 255
    t.date     "move_in"
    t.string   "contact",       limit: 255
    t.boolean  "available"
    t.boolean  "featured"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
