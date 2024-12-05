import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleEdit from "./board/ArticleEdit";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/writeArticle"} element={<ArticleEdit />} />
      </Routes>
    </div>
  );
}

function TopNav() {
  return (
    <div style={{ border: "2px solid blue" }}>
      <Link to={"/"}>Home으로 이동</Link> <br />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to={"/writeArticle"}>!!!!!!!!!게시판!!!!!!!!!</Link> <br />
    </div>
  );
}

export default App;
