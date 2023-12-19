import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import BlogView from "./components/BlogView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/blog" element={<BlogView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
