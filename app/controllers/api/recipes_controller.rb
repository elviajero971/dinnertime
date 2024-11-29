class Api::RecipesController < ApplicationController
  def index
    @recipes = ::Recipes::RecipesQuery.perform(params[:search])
    @recipes = format_index_recipes_data(@recipes)
    @recipes = Kaminari.paginate_array(@recipes).page(params[:page]).per(30)

    render json: {
      recipes: @recipes,
      total_pages: @recipes.total_pages,
      current_page: @recipes.current_page,
      recipes_count: @recipes.total_count
    }
  end

  def show
    begin
      @recipe = Recipe.find(params[:id])
      @recipe = format_show_recipe_data(@recipe)
      render json: @recipe
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Recipe not found" }, status: :not_found
    end
  end

  private

  def format_index_recipes_data(recipes)
    recipes.map do |recipe|
      recipe.attributes.except("created_at", "updated_at", "cook_time", "prep_time", "ingredients", "ratings", "category", "author")
    end
  end

  def format_show_recipe_data(recipe)
    recipe.attributes.except("created_at", "updated_at")
  end
end
