class Sound < ApplicationRecord
  # belongs_to :soundkit

# inverse_of makes the lookup faster
  belongs_to :soundkit, inverse_of: :sounds
  has_one_attached :sound_file

  # has_attached_file \
  #   :sound,
  #   styles: { thumb: ['32x32#', 'jpg'] },
  #   convert_options: {
  #     all: '-interlace Plane'
  #   },
  #   default_url: '/images/default_:style_photo.png'

  # validates_attachment_presence :sound
  # validates_attachment_file_name :sound, matches: [/wav\Z/, /mp3\Z/]
end
