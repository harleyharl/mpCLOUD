class SoundSerializer < ActiveModel::Serializer
  attributes :id, :url, :name, :soundkit_id
  belongs_to :soundkit
end
