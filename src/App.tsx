import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layout/PublicLayout";

const Home = lazy(() => import("./routes/Home/Home"));
const AddListing = lazy(() => import("./routes/AddListing/AddListing"));
const ListingPage = lazy(() => import("./routes/ListingPage/ListingPage"));

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
