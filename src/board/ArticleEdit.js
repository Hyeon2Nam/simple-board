import { useState } from "react";
import { insertArticle } from "../api/board";
import { useNavigate } from "react-router-dom";

export default function ArticleEdit() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      <input type="button" value={"글 작성"} onClick={writeArticle} />
    </div>
  );
}
