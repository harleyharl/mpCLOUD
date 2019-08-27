class SoundkitSerializer < ActiveModel::Serializer
  attributes :id, :url, :name, :description, :status
  has_many :sounds
end
