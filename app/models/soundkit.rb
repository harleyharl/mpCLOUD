class Soundkit < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  after_create_commit :set_status_to_saved
  after_update_commit :set_status_to_saved

  has_many :sounds, dependent: :destroy
  accepts_nested_attributes_for :sounds, allow_destroy: true

  def set_status_to_saved
    self.status = "saved"
  end

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
