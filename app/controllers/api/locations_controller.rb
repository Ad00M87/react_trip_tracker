class Api::LocationsController < ApplicationController
  before_action :set_trip

  def index
    @locations = @trip.locations.all
    render json: @locations
  end

  def show
  end

  def create
    location = Location.new(location_params)
    if location.save
      render json: location
    else
      render json: { errors: trip.errors }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
    Location.find(params[:id]).destroy
    render json: { message: 'Location destroyed'}
  end

  private
    def set_trip
      @trip = Trip.find(params[:trip_id])
    end

    def location_params
      params.require(:location).permit(:city, :state, :trip_id)
    end
end
