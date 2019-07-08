class SoundSerializer < ActiveModel::Serializer
  attributes :url, :name, :soundkit_id
  belongs_to :soundkit
end
