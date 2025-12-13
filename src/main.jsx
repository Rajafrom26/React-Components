import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/Stylings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
