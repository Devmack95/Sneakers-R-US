class Accessory < ApplicationRecord
  belongs_to :user, dependent: :destroy
end