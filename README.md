# 🍴 Recipe Finder

A full-stack web application built with **Ruby on Rails** and **React** that allows users to discover and filter recipes with ease. Featuring a React frontend inside a Rails application, this project provides an intuitive user experience for browsing and filtering recipes.

---

## 🚀 User Stories
- As a user, I want to see a list of recipes with their images and names, so I can quickly scroll through available options.
- As a user, I want to filter the recipe list by typing one or more ingredients, so I can find recipes that match what I have on hand.
- As a user, I want to click on a recipe from the list to see detailed information about it, including ingredients, preparation time, and instructions.

---

## 🚀 Live Demo

You can access the live demo of the app by visiting the following link:
[https://dinnertime.nomadev.online/](https://dinnertime.nomadev.online/)

## 🛠️ Getting Started

### App Tech versions
- Ruby 3.2.0
- Rails 7.2.2
- Node.js 22.11.0
- Yarn 1.22.22
- SQLite 3.43.2

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:elviajero971/dinnertime.git
   cd dinnertime
    ```
   
2. **Install dependencies**:
    ```bash
    bundle install
    yarn install
    ```
   
3. **Set up the database**:
    ```bash
    rails db:create db:migrate db:seed
    ```

### Running the app
**Start the server with foreman using the Procfile**:
   ```bash
    foreman start -f Procfile.dev
   ```

**Access the app**:
- Open your browser and navigate to `http://localhost:3000/`

### Running tests
**Run the test suite**:
   ```bash
    rspec .
   ```
