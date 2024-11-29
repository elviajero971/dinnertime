class ChangeIngredientsToJsonbInRecipes < ActiveRecord::Migration[7.2]
  def change
    change_column :recipes, :ingredients, :jsonb
  end
end
