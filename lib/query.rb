module Query
  extend ActiveSupport::Concern

  included do
    def self.perform(*args, **kwargs)
      new(*args, **kwargs).perform
    end
  end
end