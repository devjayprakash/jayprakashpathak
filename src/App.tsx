import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./shared/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home.root} element={<HomePage />} />
    </Routes>
  );
}

export default App;
