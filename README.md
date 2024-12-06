# 🍴 Recipe Finder

A full-stack web application built with **Ruby on Rails** and **React** that allows users to discover and filter recipes with ease. Featuring a React frontend inside a Rails application, this project provides an intuitive user experience for browsing and filtering recipes.

---

## 🚀 Features
- View a list of recipes with images and names.
- Filter recipes by typing one or more ingredients.
- Click on a recipe from the list to see details about it.

---

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
   
4. **Start the server**:
    ```bash
   foreman start -f Procfile.dev
    ```
