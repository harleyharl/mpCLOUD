class SoundsController < ApplicationController
  def index
    @sounds = Sound.all
    render json: @sounds, status: 200
  end

end

# def index
#   q = params[:q]
#
#   if q.blank?
#     render status: 400, json: { error: 'Expected parameter `q` '}
#   else
#     render(
#       status: 200,
#       json: Food.where(["description LIKE ?", "%#{q}%"]).limit(100)
#     )
#   end
# end
