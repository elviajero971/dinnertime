FactoryBot.define do
  factory :recipe do
    sequence(:title) { |n| "Recipe #{n}" }
    cook_time { rand(10..120) }
    prep_time { rand(5..60) }
    ingredients { Faker::Food.ingredient + ", " + Faker::Food.ingredient }
    ratings { rand(1..5) }
    category { Faker::Food.dish }
    author { Faker::Name.name }
    image_url { Faker::Internet.url(path: '/image.jpg') }
  end
end
