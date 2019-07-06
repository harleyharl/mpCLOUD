class User < ApplicationRecord
  has_secure_password
  has_many :user_soundkits
  has_many :soundkits, through: :user_soundkits
  has_many :recordings
  # maybe eventually need a join table
  validates :email_address, uniqueness: true
  validates :email_address, format: { with: URI::MailTo::EMAIL_REGEXP }
end
