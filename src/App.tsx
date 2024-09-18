import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import "./App.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const ListingPage = lazy(() => import("./Pages/ListingPage/ListingPage"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing-page" element={<ListingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
