class Sound < ApplicationRecord
  belongs_to :soundkit, inverse_of: :sounds
  has_one_attached :sound_file
end
