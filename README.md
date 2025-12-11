# ⚛️ [Meal-Finder]

**A dynamic, modern web application built with React and powered by TheMealDB API.**

This project serves as a showcase of modern React development practices, focusing on component organization, state management using Context API, and handling external data fetching.

## 🌟 Features

* **🔍 Detailed Product View:** Users can view comprehensive details for individual meal items, including ingredients, instructions, and video links (where available).
* **🌐 Client-Side Routing:** Seamless navigation within the application using `react-router-dom`.
* **📦 Global State Management:** Utilizes React's **Context API** for efficient global state sharing (e.g., shopping cart, favorites, user settings).
* **🖼️ Image Magnification:** Enhanced UX on product details with the `react-magnifier` library.
* **🚫 Custom Alerts:** Implementation of a custom, styled notification system to replace native browser `alert()`s for a cohesive UI.
* **🖥️ Responsive Design:** Styled using **Bootstrap** for mobile-first, responsive layouts.

## 🛠️ Tech Stack

* **Frontend:**     * **React:** For building the user interface.
    * **Axios:** For promise-based HTTP requests (data fetching).
    * **React Router DOM:** For declarative routing.
* **Styling:**
    * **Bootstrap:** Pre-built styling components.
    * **Custom CSS:** (`Stylings.css`) for project-specific styles.
* **API:**
    * **TheMealDB API:** Used as the primary data source for meal and recipe information.

## 📁 Project Structure
. ├── node_modules/ ├── public/ ├── src/ │ ├── Components/ # Reusable UI elements (e.g., Navbar, Footer) │ ├── Context/ # All Context providers and related logic (Context/ContextProvider.jsx) │ ├── Practice/ # Practice components (FolderComp, FuncComp, etc.) - For development only. │ ├── Routing/ # Main routing configuration │ ├── main.jsx # Entry point of the application │ ├── App.jsx # Main application component, consuming Context and Router │ └── Stylings.css # Global custom styles ├── .gitignore └── package.json

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** (or yarn/pnpm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd [your-project-name]
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

The application should now be running in your browser at `http://localhost:5173` (or the port specified by your development environment).

## 📝 Usage & Development Notes

### Data Fetching

* All API calls utilize `axios`.
* The `ProductDetail` component uses the `lookup.php?i={id}` endpoint for comprehensive data, ensuring all necessary fields (like `strYoutube`) are available.

### Custom Component Alert

* The native `alert()` is replaced by custom logic (e.g., a modal or toast) to ensure a cohesive UI when a data field, such as the video link, is missing (`null`).

## ✍️ Author

* **[Rajafrom26]** - *Initial Work* - [https://github.com/Rajafrom26/Meal-finder.git]