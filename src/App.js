import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { ContriesPage } from "./Pages/ContriesPage/ContriesPage";
import { InnerContriesPage } from "./Pages/InnerContriesPage/InnerContriesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/continents/:place" element={<ContriesPage />}></Route>
        <Route
          path="/continents/:continent/:place"
          element={<InnerContriesPage />}
        ></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
