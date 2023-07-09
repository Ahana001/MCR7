import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { ContriesPage } from "./Pages/ContriesPage/ContriesPage";
import { InnerContriesPage } from "./Pages/InnerContriesPage/InnerContriesPage";
import { SingleContryPage } from "./Pages/SingleContryPage/SingleContryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/continents/:continents"
          element={<ContriesPage />}
        ></Route>
        <Route
          path="/continents/:continent/:contry"
          element={<InnerContriesPage />}
        ></Route>
        <Route
          path="/continents/:continent/:contry/:place/"
          element={<SingleContryPage />}
        ></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
