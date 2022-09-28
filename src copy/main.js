import { createApp } from "vue";
// import "./assets/scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import App from "./App.vue";
// Import our custom CSS
// import router from "./router";

// import "./assets/main.css";

import "./assets/css/bootstrap.min.css";
import "./assets/scss/styles.scss";
import "./assets/fonts/material_fonts.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/style.css";
import "./assets/fonts/font-awesome.min.css";

const app = createApp(App);

// app.use(router);

app.mount("#app");
