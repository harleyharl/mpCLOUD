class UserSoundkit < ApplicationRecord
  belongs_to :user
  belongs_to :soundkit
end
