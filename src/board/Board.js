import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadArticleList, searchArticle } from "../api/board";
import ArticleList from "./ArticleList";

export default function Board() {
  const navigate = useNavigate();

  const [authroSearch, setAuthroSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    localStorage.setItem("userId", "hong");
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

  const searchArticleInfo = () => {
    let obj = {
      keyword: titleSearch,
      created: authroSearch,
    };

    searchArticle(obj).then((res) => {
      if (res.data.code === "200" && res.data.msg === "success")
        setArticleList(res.data.data.reverse());
      else setArticleList([]);
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
            onClick={() => navigate("/writeArticle/create/0")}
          />
          <div>
            <div>
              <span>글쓴이 검색</span>
              <input
                value={authroSearch}
                onChange={(e) => setAuthroSearch(e.target.value)}
              />
            </div>
            <div>
              <span>제목 검색</span>
              <input
                value={titleSearch}
                onChange={(e) => setTitleSearch(e.target.value)}
              />
            </div>
            <input type="button" value={"검색"} onClick={searchArticleInfo} />
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            margin: "0 20%",
            marginTop: "30px",
            height: "70vh",
            overflow: "scroll",
          }}
        >
          <ArticleList list={articleList} />
        </div>
      </div>
    </div>
  );
}
