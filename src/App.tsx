import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layout/PublicLayout";

import { Home } from "./pages/Home/Home";
import { AddListing } from "./pages/AddListing/AddListing";
import { ListingPage } from "./pages/ListingPage/ListingPage";

import "./App.css";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/listing-page" element={<ListingPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
