module Recipes
  class RecipesQuery
    include Query

    def initialize(search: nil, page:, per_page:)
      @search = search
      @page = page
      @per_page = per_page
    end

    def perform
      recipes = Recipe.all.order(:title).page(page).per(per_page)
      return recipes if search.blank?

      search_terms = search&.downcase&.split(",")&.map(&:strip)
      query = search_terms&.map { "ingredients LIKE ?" }.join(" AND ")
      values = search_terms&.map { |term| "%#{term}%" }

      puts "search_terms: #{search_terms}"

      recipes = Recipe.where(query, *values).order(:title).page(page).per(per_page)

      puts "recipes: #{recipes.inspect}"
      recipes
    end

    private

      attr_reader :search, :page, :per_page
  end
end