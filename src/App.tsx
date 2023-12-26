import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/blog/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
