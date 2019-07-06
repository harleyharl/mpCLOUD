class RecordingsController < ApplicationController
  def index
    # change to lookup by session !!
    @user = User.find_by(id: 1)
    @recordings = @user.recordings
    render json: @recordings, status: 200
  end
end
