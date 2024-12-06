import { useNavigate } from "react-router-dom";

export default function ArticleItem({ item }) {
  const navigate = useNavigate();

  const reFormateDate = () => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div
      onClick={() => navigate("/view/" + item.boardIdx)}
      style={{
        padding: "2%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #a1a1a1",
        cursor: "pointer",
      }}
    >
      <div>
        <span
          style={{
            paddingRight: "10px",
            margin: "0 10px 0 0 ",
            borderRight: "1px solid #a1a1a1",
          }}
        >
          {item.boardIdx}
        </span>
        <b>{item.title}</b>
        {"  ("}
        {item.boardGood}
        {")"}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>{item.memberId}</div>
        <div>{reFormateDate()}</div>
      </div>
    </div>
  );
}
