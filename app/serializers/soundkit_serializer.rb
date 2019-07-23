class SoundkitSerializer < ActiveModel::Serializer
  attributes :id, :url, :name, :description
  has_many :sounds
end
