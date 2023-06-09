import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Achievements from "./pages/Achievements";
import Game from "./pages/Game";
import Header from "./mainComponents/Header";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="main">
      {useLocation().pathname !== "/" ? (
        <Header backStatus={true} />
      ) : (
        <Header backStatus={false} />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
