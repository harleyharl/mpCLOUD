class SoundkitsController < ApplicationController
  def index
    @soundkits = Soundkit.all
    render json: @soundkits, status: 200
  end

  def show

    # id = params[:id]
    # @soundkit = Soundkit.where(id:id)
    #
    # @soundkit.attach(io: File.open('../client/src/public'), filename: sound.name)

    id = params[:id]
    render(
      status: 200,
      json: Soundkit.where(id: id)
    )
  end

end

def create
end 

# filter example
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
