class SoundkitsController < ApplicationController
  def index
    #change to use session!
    @user = User.find_by(id: 1)
    @soundkits = @user.soundkits
    render json: @soundkits, status: 200
  end
end
