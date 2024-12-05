import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadArticleList } from "../api/board";
import ArticleList from "./ArticleList";

export default function Board() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    loadArticleList().then((res) => {
      // console.log(res);
      if (res.data.code === "200") {
        setArticleList(res.data.data.reverse());
      }
    });
  };

  return (
    <div>
      <h1>BOard</h1>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <input
            type="button"
            value={"글 작성"}
            onClick={() => navigate("/writeArticle/create")}
          />
          <div>
            <select onChange={(e) => setSearchCategory(e.target.value)}>
              <option value={"all"}>전체</option>
              <option value={"keyword"}>제목</option>
              <option value={"created"}>글쓴이</option>
            </select>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <input
              type="button"
              value={"검색"}
              onClick={() => navigate("/board")}
            />
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            margin: "0 20%",
            marginTop: "30px",
            height: "70vh",
          }}
        >
          <ArticleList list={articleList} />
        </div>
      </div>
    </div>
  );
}
