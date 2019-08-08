class Soundkit < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  # validate :validate_size
  #
  # def validate_size
  #   errors.add(:errors, "too much") if sounds.size < 5
  # end

  has_many :sounds, dependent: :destroy
  accepts_nested_attributes_for :sounds, allow_destroy: true

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
