require 'rails_helper'

describe Recipe, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:cook_time) }
    it { is_expected.to validate_presence_of(:prep_time) }
    it { is_expected.to validate_presence_of(:ingredients) }
    it { is_expected.to validate_presence_of(:ratings) }
    it { is_expected.to validate_presence_of(:category) }
    it { is_expected.to validate_presence_of(:author) }
    it { is_expected.to validate_presence_of(:image_url) }
  end
end

