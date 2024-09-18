import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ListingPage from "./Pages/ListingPage/ListingPage";

import "./App.css";

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
