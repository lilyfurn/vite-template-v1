import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";


function AppContent() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <AppContent /> 
    </BrowserRouter>
  );
}

export default App;
