import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import SimpleOrganik from "./pages/SimpleOrganik";
import CoffeBreak from "./pages/CoffeBreak";
import PizzaPlace from "./pages/PizzaPlace";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="quickly-html-editor" element={<App />}></Route>
      <Route
        path="quickly-html-editor/simple-organik"
        element={<SimpleOrganik />}
      />
      <Route path="quickly-html-editor/pizza-place" element={<PizzaPlace />} />
      <Route path="quickly-html-editor/coffee-break" element={<CoffeBreak />} />
    </Routes>
  </BrowserRouter>
);
