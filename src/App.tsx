import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layout/PublicLayout";

//@ts-ignore
import Home from "./pages/Home";
//@ts-ignore
import AddListing from "./pages/AddListing";
//@ts-ignore
import ListingPage from "./pages/ListingPage";

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
