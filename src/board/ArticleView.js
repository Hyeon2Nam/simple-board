import { useNavigate, useParams } from "react-router-dom";
import { countAticleGood, deleteArticle, loadArticle } from "../api/board";
import { useEffect, useState } from "react";

export default function ArticleView() {
  const navigate = useNavigate();
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loginUserId, setLoginUserId] = useState("");

  useEffect(() => {
    loadArticleInfo();
    setLoginUserId(localStorage.getItem("userId"));
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

    loadArticle(obj).then((res) => {
      //   console.log(res);
      if (res.data.code === "200" && res.data.msg === "success") {
        setArticle(res.data.data);
      } else navigate("/");
    });
  };

  const deleteArticleInfo = () => {
    const obj = {
      boardId: params.id,
    };

    deleteArticle(obj).then((res) => {
      if (res.data.code === "200" && res.data.msg === "success") {
        alert("삭제완료");
        navigate("/");
      } else alert("삭제실패");
    });
  };

  const editArticleInfo = () => {};

  const upGoodCount = () => {
    setArticle({ ...article, boardGood: article.boardGood + 1 });

    const obj = { boardId: params.id };
    countAticleGood(obj);
  };

  return (
    <div>
      <div>
        <h1>{article.title}</h1>
        {loginUserId !== article.memberId && (
          <input type="button" value={"추천"} onClick={upGoodCount} />
        )}
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
      <div
        style={{
          margin: "30px 0",
        }}
      >
        {article.content}
      </div>
      <hr />
      {loginUserId === article.memberId && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <input
            type="button"
            value={"수정하기"}
            onClick={() => navigate("/writeArticle/edit/" + params.id)}
          />
          <input type="button" value={"삭제하기"} onClick={deleteArticleInfo} />
        </div>
      )}
    </div>
  );
}
