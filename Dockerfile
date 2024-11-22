# Base image: Official Ruby image
FROM ruby:3.2.0-slim-bullseye

# Set the working directory inside the Docker container
WORKDIR /app

# Update and install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends build-essential curl git libvips sqlite3 yarn

# Copy Gemfile and Gemfile.lock to Docker container
COPY Gemfile Gemfile.lock ./

# Set up env
ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true

# Install Bundler and the required gems
RUN bundle install

# Copy the entire Rails application into the container
COPY . .

RUN bundle exec rake assets:precompile

# **Use an argument for the master key**
ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY=$RAILS_MASTER_KEY

# Expose the Rails default port 3001
EXPOSE 3001

# Command to run the Rails server
CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0", "-p", "3001"]
