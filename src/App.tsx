import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ListingPage from "./pages/ListingPage/ListingPage";

import "./App.css";
import AddListing from "./pages/AddListing/AddListing";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing-page" element={<ListingPage />} />
          <Route path="/add-listing" element={<AddListing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
