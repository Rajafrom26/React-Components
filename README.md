
# ⚛️ Meal-Finder

**A dynamic, modern web application built with React, Redux Toolkit, and TheMealDB API.**

This project serves as a showcase of modern React development practices, focusing on component organization, efficient global state management using **Redux Toolkit**, and handling external data fetching.

## 🌟 Features

  * **🔍 Detailed Product View:** Users can view comprehensive details for individual meal items, including ingredients, measures, instructions, and YouTube video links.
  * **❤️ Favorites System:**
      * Add meals to a global "Favorites" list.
      * **Smart Buttons:** The "Add to Favorites" button automatically disables and changes state if an item is already saved.
      * Remove items directly from the Favorites page.
  * **🌐 Client-Side Routing:** Seamless navigation between the Home, Product Details, and Favorites pages using `react-router-dom`.
  * **⚡ Redux State Management:** Centralized state for managing the favorites list across the application.
  * **📱 Responsive Design:** Styled using **Bootstrap** for mobile-first, responsive layouts.

  * **Usage Of Magnifier** ``` <Magnifier src="/your-image.jpg" zoom={2} /> ```

## 🛠️ Tech Stack

  * **Frontend:**
      * **React:** UI Library.
      * **Redux Toolkit:** For efficient, scalable global state management.
      * **React Redux:** To connect components to the Redux store.
      * **Axios:** For HTTP requests to TheMealDB API.
      * **React Router DOM:** For declarative routing.
  * **Styling:**
      * **Bootstrap:** Layouts and pre-built components.
      * **Custom CSS:** (`Stylings.css`) for specific overrides.
  * **API:**
      * **TheMealDB API:** Primary data source for recipes and meal info.

## 📁 Project Structure

```text
.
├── node_modules/
├── public/
├── src/
│   ├── Components/      # UI elements (Navbar, Footer, ProductDetail, Favourite)
│   ├── Redux/           # Redux Logic
│   │   ├── store.js     # Global Store configuration
│   │   └── cartSlice.js # Slice for Favorites logic (add/remove reducers)
│   ├── Routing/         # Main routing configuration
│   ├── main.jsx         # Entry point (Redux Provider wraps App here)
│   ├── App.jsx          # Main application layout
│   └── Stylings.css     # Global custom styles
├── .gitignore
└── package.json
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Rajafrom26/Meal-finder.git
    cd Meal-finder
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the application:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application should now be running in your browser at `http://localhost:5173`.

## 📝 Development Notes

### State Management (Redux)

  * The application uses a `cartSlice` (mapped to `state.fav` in the store).
  * **Action `addToFav`**: Pushes a new meal object to the array (includes logic to prevent duplicates).
  * **Action `removeToFav`**: Filters the array based on `idMeal` to remove items.

### Data Fetching

  * All API calls utilize `axios`.
  * The `ProductDetail` component checks the Redux store on load to see if the current item is already a favorite, updating the UI accordingly.

## ✍️ Author

  * **Rajafrom26** - *Initial Work* - [GitHub Profile](https://github.com/Rajafrom26)