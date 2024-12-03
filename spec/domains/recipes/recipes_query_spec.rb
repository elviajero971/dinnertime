# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Recipes::RecipesQuery, type: :query do
  let!(:recipe1) { create(:recipe, title: 'Spaghetti', ingredients: 'Tomato, Pasta, Cheese') }
  let!(:recipe2) { create(:recipe, title: 'Pizza', ingredients: 'Cheese, Dough, Tomato Sauce') }
  let!(:recipe3) { create(:recipe, title: 'Salad', ingredients: 'Lettuce, Tomato, Cucumber') }
  let!(:recipe4) { create(:recipe, title: 'Soup', ingredients: 'Carrot, Onion, Celery, Cheese') }
  let!(:recipe5) { create(:recipe, title: 'Pasta', ingredients: 'Tomato, Basil, Garlic') }

  describe '#perform' do
    context 'when no ingredient search parameter is provided' do
      it 'returns first 4 recipes ordered by title with pagination' do
        query = Recipes::RecipesQuery.new(page: 1, per_page: 4)
        result = query.perform

        expect(result).to eq([ recipe5, recipe2, recipe3, recipe4 ])
        expect(result.total_pages).to eq(2)
      end
    end

    context 'when ingredient search parameter is provided' do
      it 'returns recipes matching a single ingredient' do
        query = Recipes::RecipesQuery.new(search: 'Cheese', page: 1, per_page: 4)
        result = query.perform

        expect(result).to eq([ recipe2, recipe4, recipe1 ])
      end

      it 'returns recipes matching multiple ingredients' do
        query = Recipes::RecipesQuery.new(search: 'Cheese, Tomato', page: 1, per_page: 3)
        result = query.perform

        expect(result).to eq([ recipe2, recipe1 ])
      end

      it 'is case-insensitive and trims whitespace' do
        query = Recipes::RecipesQuery.new(search: '  cheese ,  TOMATO  ', page: 1, per_page: 3)
        result = query.perform

        expect(result).to eq([ recipe2, recipe1 ])
      end

      it 'returns an empty result when no recipes match' do
        query = Recipes::RecipesQuery.new(search: 'Chocolate', page: 1, per_page: 3)
        result = query.perform

        expect(result).to be_empty
      end

      it 'handles overlapping search terms gracefully' do
        query = Recipes::RecipesQuery.new(search: 'Tomato, Tomato Sauce', page: 1, per_page: 3)
        result = query.perform

        expect(result).to eq([ recipe2 ])
      end

      it 'handles partial matches' do
        query = Recipes::RecipesQuery.new(search: 'lett', page: 1, per_page: 3)
        result = query.perform

        expect(result).to eq([ recipe3 ])
      end
    end

    context 'with pagination' do
      it 'paginates the results correctly' do
        query = Recipes::RecipesQuery.new(search: 'Tomato', page: 2, per_page: 2)
        result = query.perform

        expect(result).to eq([ recipe3, recipe1 ])
      end

      it 'returns an empty result for out-of-bound pages' do
        query = Recipes::RecipesQuery.new(search: 'Tomato', page: 10, per_page: 2)
        result = query.perform

        expect(result).to be_empty
      end
    end
  end
end
