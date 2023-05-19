import { createRoot } from "react-dom/client";
import SearchFields from "./components/SearchFields";
import Blason from "./components/Blason";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlansonInfo from "./BlansonInfo";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container">
      <BrowserRouter>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="title">Liste des blasons des pays du monde</h1>
        </Link>
        <Routes>
          <Route path="/infos/:name" element={<BlansonInfo />} />
          <Route
            path="/"
            element={
              <>
                <SearchFields
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <Blason searchValue={searchValue} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
