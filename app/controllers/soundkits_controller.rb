class SoundkitsController < ApplicationController
  def index
    @soundkits = Soundkit.all
    render json: @soundkits, status: 200
  end

  def show
    id = params[:id]
    render(
      status: 200,
      json: Soundkit.where(id: id)
    )
  end

  def create
    # Rails.application.routes.url_helpers.rails_blob_path(Soundkit.all.last.sounds.first.sound_file_attachment, only_path: true)
    @soundkit = Soundkit.new(soundkit_params)
    @soundkit.sounds.each do |sound|
      sound.url = url_for(sound.sound_file)
      sound.name = sound.sound_file.name
    end
    @soundkit.save
  end

  def soundkit_params
    params.require(:soundkit).permit([:name, :description, sounds_attributes: %I[id name sound_file _destroy]])
  end

end
