class SoundsController < ApplicationController
  def index
    @sounds = Sound.all
    render json: @sounds, status: 200
  end
end
