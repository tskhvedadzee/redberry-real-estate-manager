import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layout/PublicLayout";

const Home = lazy(() => import("./pages/Home"));
const ListingPage = lazy(() => import("./pages/ListingPage"));
const AddListing = lazy(() => import("./pages/AddListing"));

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
