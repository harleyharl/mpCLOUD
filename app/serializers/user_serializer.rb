class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :soundkits
end