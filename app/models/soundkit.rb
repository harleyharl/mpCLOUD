class Soundkit < ApplicationRecord
  has_many :user_soundkits
  has_many :users, through: :user_soundkits
  has_many :sounds
  # has_many_attached :sounds   WHY DOES THIS BREAK MY APP?
end
