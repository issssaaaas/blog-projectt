import { Routes, Route } from "react-router-dom";

import "./App.css";
import ArticleDetailPage from "./pages/ArticleDetail/ArticleDetailPage";
import HomePage from "./pages/Home/Homepage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
	
export default App;