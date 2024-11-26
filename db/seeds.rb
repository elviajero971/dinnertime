require 'json'
require 'benchmark'

time_take_destroy = Benchmark.measure do
  Recipe.in_batches(of: 500).delete_all
end
puts "Time taken to destroy all records: #{time_take_destroy.real.round(2)} seconds"

json_data = File.read('db/recipes-en.json')
recipes = JSON.parse(json_data)

# Batch size for optimized insertion
BATCH_SIZE = 500

# Measure time taken
time_taken = Benchmark.measure do
  recipes.each_slice(BATCH_SIZE) do |batch|
    bulk_data = batch.map do |recipe|
      {
        title: recipe['title'],
        cook_time: recipe['cook_time'],
        prep_time: recipe['prep_time'],
        ingredients: recipe['ingredients'].join(', '),
        ratings: recipe['ratings'],
        category: recipe['category'],
        author: recipe['author'],
        image_url: recipe['image'],
        created_at: Time.current,
        updated_at: Time.current
      }
    end

    # Bulk insert for better performance
    Recipe.insert_all(bulk_data)
  end
end

puts "Database seeded successfully with #{recipes.size} records."
puts "Time taken to create all records: #{time_taken.real.round(2)} seconds"
