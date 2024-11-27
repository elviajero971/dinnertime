module Recipes
  class RecipesQuery
    include Query

    def initialize(ingredient_search_param)
      @ingredient_search_param = ingredient_search_param
    end

    def perform
      recipes = Recipe.all.order(:title)
      return recipes if ingredient_search_param.blank?

      search_terms = ingredient_search_param.downcase.split(",").map(&:strip)

      query = search_terms.map { "ingredients LIKE ?" }.join(" AND ")
      values = search_terms.map { |term| "%#{term}%" }

      # Execute the query
      @recipes = Recipe.where(query, *values).order(:title)
    end

    private

      attr_reader :ingredient_search_param
  end
end