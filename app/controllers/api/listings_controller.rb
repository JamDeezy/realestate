class API::ListingsController < ApplicationController

  def index
    @listings = Listing.order(
      available: :desc,
      updated_at: :desc
    )
    render json: @listings
  end

  def featured
    @featuredListings = Listing.featured.order(
      updated_at: :desc
    )
    render json: @featuredListings
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing
  end

end