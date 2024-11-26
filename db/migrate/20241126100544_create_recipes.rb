class CreateRecipes < ActiveRecord::Migration[7.2]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :cook_time
      t.integer :prep_time
      t.text :ingredients
      t.float :ratings
      t.string :category
      t.string :author
      t.string :image_url

      t.timestamps
    end
  end
end
