class Soundkit < ApplicationRecord
  has_many :user_soundkits
  has_many :users, through: :user_soundkits
end
