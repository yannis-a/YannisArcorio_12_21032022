import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profil from "./pages/Profil";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user/:id" element={<Profil />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
