require 'rails_helper'

RSpec.describe Api::RecipesController, type: :controller do
  before(:each) do
    # Create 100 test records for pagination
    @recipes = create_list(:recipe, 100)
  end

  describe "GET #index" do
    context "without search params" do
      it "returns the first page of recipes" do
        get :index, params: { page: 1 }

        expect(response).to have_http_status(:ok)
        json = JSON.parse(response.body)

        expect(json['recipes'].size).to eq(30) # Default 30 per page
        expect(json['total_pages']).to eq(4)  # 100 / 30 = 4 pages
        expect(json['current_page']).to eq(1)
        expect(json['recipes_count']).to eq(100)
      end

      it "calls the RecipesQuery with no search term" do
        expect(Recipes::RecipesQuery).to receive(:perform).with(search: nil, page: "1", per_page: 30).and_call_original

        get :index, params: { page: 1 }
      end
    end

    context "with search params" do
      it "returns filtered recipes by ingredients" do
        recipe = @recipes.first
        search_term = recipe.ingredients.split(",").first.downcase

        get :index, params: { search: search_term, page: 1 }

        expect(response).to have_http_status(:ok)
        json = JSON.parse(response.body)

        expect(json['recipes']).not_to be_empty
        expect(json['current_page']).to eq(1)
      end

      it "calls the RecipesQuery with the search term" do
        recipe = @recipes.first
        search_term = recipe.ingredients.split(",").first.downcase

        expect(Recipes::RecipesQuery).to receive(:perform).with(search: search_term, page: "1", per_page: 30).and_call_original

        get :index, params: { search: search_term, page: 1 }
      end
    end
  end

  describe "GET #show" do
    context "when the recipe exists" do
      it "returns the recipe" do
        recipe = @recipes.first

        get :show, params: { id: recipe.id }

        expect(response).to have_http_status(:ok)
        json = JSON.parse(response.body)

        expect(json['id']).to eq(recipe.id)
        expect(json['title']).to eq(recipe.title)
      end
    end

    context "when the recipe does not exist" do
      it "returns a 404 status" do
        get :show, params: { id: -1 }

        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
