class SoundkitSerializer < ActiveModel::Serializer
  attributes :id, :url, :name
  has_many :sounds
end
