class Recipe < ApplicationRecord
  # add some validations
  validates :title,
            :cook_time,
            :prep_time,
            :ingredients,
            :ratings,
            :category,
            :author,
            :image_url,
            presence: true
end
