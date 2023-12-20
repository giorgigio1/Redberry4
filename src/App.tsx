import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/blog/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
