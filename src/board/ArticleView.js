import { useNavigate, useParams } from "react-router-dom";
import { loadArticle } from "../api/board";
import { useEffect, useState } from "react";

export default function ArticleView() {
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    loadArticleInfo();
  }, []);

  const reFormateDate = () => {
    const date = new Date(article.createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const loadArticleInfo = () => {
    const obj = { boardId: params.id };

    console.log(obj);

    loadArticle(obj).then((res) => {
      console.log(res);
      if (res.data.code === "200") {
        setArticle(res.data.data);
      } else navigate("/");
    });
  };

  return (
    <div>
      <div>
        <h1>{article.title}</h1>
        <input type="button" value={"추천"} />
      </div>
      <hr />
      <div
        style={{
          padding: "1%",
          margin: "0 0 20px 0 ",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #a1a1a1",
          cursor: "pointer",
        }}
      >
        <div>작성자 : {article.memberId}</div>
        <div>작성일 : {reFormateDate()}</div>
        {/* <div>수정일 : {article.memberId}</div> */}
        <div>
          추천수 {"("}
          {article.boardGood}
          {")"}
        </div>
      </div>
      <div>{article.content}</div>
    </div>
  );
}
