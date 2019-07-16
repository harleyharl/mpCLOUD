class Soundkit < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  # has_many :user_soundkits
  # has_many :users, through: :user_soundkits

  has_many :sounds, dependent: :destroy
  accepts_nested_attributes_for :sounds, allow_destroy: true
  # has_many_attached :sounds

  def as_json(_opts = {})
    {
      id: id,
      name: name,
      description: description,
      errors: errors,
      sounds: sounds.map do |s|
        {
          url: s.url,
          name: s.sound_file_name,
          id: s.id
        }
      end
    }
  end

end
