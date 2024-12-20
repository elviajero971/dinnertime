class Api::RecipesController < ApplicationController
  def index
    @recipes = ::Recipes::RecipesQuery.perform(search: params[:search], page: params[:page], per_page: 30)

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
      render json: @recipe
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Recipe not found" }, status: :not_found
    end
  end
end
