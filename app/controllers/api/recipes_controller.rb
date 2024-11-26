class Api::RecipesController < ApplicationController
  def index
    if params[:search].present?
      search = params[:search].downcase.split(",").map(&:strip)
      search = search.join("%")
      @recipes = Recipe.where("lower(ingredients) LIKE ?", "%#{search}%").order(:title)
    else
      @recipes = Recipe.all.order(:title)
    end

    @recipes = @recipes.page(params[:page]).per(30)

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
