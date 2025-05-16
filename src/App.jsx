import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Apropos from "./pages/A-propos";
import Logement from "./pages/Logement";
import Page404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logement />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
