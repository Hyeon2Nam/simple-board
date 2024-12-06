import { useEffect, useState } from "react";
import { editArticle, insertArticle, loadArticle } from "../api/board";
import { useNavigate, useParams } from "react-router-dom";

export default function ArticleEdit() {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isCreate, setisCreate] = useState(true);

  const writeArticle = () => {
    const obj = {
      title: title,
      content: content,
      memberId: "hong",
    };

    insertArticle(obj).then((res) => {
      if (res.data.code === "200") {
        alert("글 작성 완료");
        navigate("/");
      } else alert("글 작성 실패!");
    });
  };

  const loadArticleInfo = () => {
    const obj = { boardId: params.id };

    loadArticle(obj).then((res) => {
      if (res.data.code === "200" && res.data.msg === "success") {
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      }
    });
  };

  const editArticleInfo = () => {
    const obj = {
      boardId: params.id,
      title: title,
      content: content,
      memberId: "hong",
    };

    editArticle(obj).then((res) => {
      if (res.data.code === "200") {
        alert("글 수정 완료");
        navigate("/");
      } else alert("글 수정 실패!");
    });
  };

  useEffect(() => {
    if (params.mode === "edit") {
      loadArticleInfo();
      setisCreate(false);
    }
  }, []);

  return (
    <div
      style={{
        margin: "30px 0",
      }}
    >
      <input
        style={{
          width: "720px",
          height: "50px",
          fontSize: "20px",
        }}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <textarea
        style={{
          margin: "10px 0",
          fontSize: "20px",
        }}
        cols={70}
        rows={30}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <input
        type="button"
        value={isCreate ? "글 작성" : "글 수정"}
        onClick={isCreate ? writeArticle : editArticleInfo}
      />
    </div>
  );
}
