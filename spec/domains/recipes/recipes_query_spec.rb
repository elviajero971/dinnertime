# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Recipes::RecipesQuery, type: :query do
  let!(:recipe1) { create(:recipe, title: 'Spaghetti', ingredients: 'Tomato, Pasta, Cheese') }
  let!(:recipe2) { create(:recipe, title: 'Pizza', ingredients: 'Cheese, Dough, Tomato Sauce') }
  let!(:recipe3) { create(:recipe, title: 'Salad', ingredients: 'Lettuce, Tomato, Cucumber') }
  let!(:recipe4) { create(:recipe, title: 'Soup', ingredients: 'Carrot, Onion, Celery, Cheese') }

  describe '#perform' do
    context 'when no ingredient search parameter is provided' do
      it 'returns all recipes ordered by title' do
        query = Recipes::RecipesQuery.new(nil)
        result = query.perform

        expect(result).to eq([ recipe2, recipe3, recipe4, recipe1 ]) # Alphabetical by title
      end
    end

    context 'when ingredient search parameter is provided' do
      it 'returns recipes matching a single ingredient' do
        query = Recipes::RecipesQuery.new('Tomato')
        result = query.perform

        expect(result).to eq([ recipe2, recipe3, recipe1 ])
      end

      it 'returns recipes matching multiple ingredients' do
        query = Recipes::RecipesQuery.new('Cheese, Tomato')
        result = query.perform

        expect(result).to eq([ recipe2, recipe1 ])
      end

      it 'is case-insensitive and trims whitespace' do
        query = Recipes::RecipesQuery.new('  cheese ,  TOMATO  ')
        result = query.perform

        expect(result).to eq([ recipe2, recipe1 ])
      end

      it 'returns an empty result when no recipes match' do
        query = Recipes::RecipesQuery.new('Chocolate')
        result = query.perform

        expect(result).to be_empty
      end
    end
  end
end
