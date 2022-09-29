import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// Import our custom CSS
// import router from "./router";

// import "./assets/main.css";

import "./assets/css/bootstrap.min.css";
import "./assets/scss/styles.scss";
import "./assets/fonts/material_fonts.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/style.css";
import "./assets/fonts/font-awesome.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
