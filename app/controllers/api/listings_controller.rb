class API::ListingsController < ApplicationController

  def index
    @listings = Listing.order(
      available: :desc,
      updated_at: :desc
    )

    render json: @listings,
           methods: :header_title,
           include: { header_photo: { only: [:id, :url] } }
  end

  def featured
    @featuredListings = Listing.featured.order(
      updated_at: :desc
    )
    render json: @featuredListings,
           methods: :header_title,
           include: { header_photo: { only: [:id, :url] } }
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing, include: :listing_detail
  end

end