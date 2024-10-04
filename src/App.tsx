import {Navigate, Route, Routes} from "react-router-dom";
import IndiamartPage from "./pages/IndiamartPage.tsx";
import NextdoorPage from "./pages/NextdoorPage.tsx";
import BuildzoomPage from "./pages/BuildzoomPage.tsx";
import AmexPage from "./pages/AmexPage.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigate to="/indiamart" replace />} />
        <Route path="/indiamart" element={<IndiamartPage />} />
        <Route path="/nextdoor" element={<NextdoorPage />} />
        <Route path="/buildzoom" element={<BuildzoomPage />} />
        <Route path="/amex" element={<AmexPage />} />
    </Routes>
  )
}

export default App
