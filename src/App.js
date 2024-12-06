import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleEdit from "./board/ArticleEdit";
import Board from "./board/Board";
import ArticleView from "./board/ArticleView";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path={"/"} element={<Board />} />
        <Route path={"/writeArticle/:mode/:id"} element={<ArticleEdit />} />
        <Route path={"/view/:id"} element={<ArticleView />} />
      </Routes>
    </div>
  );
}

function TopNav() {
  return (
    <div style={{ border: "2px solid blue" }}>
      <Link to={"/"}>게시판</Link> <br />
    </div>
  );
}

export default App;
