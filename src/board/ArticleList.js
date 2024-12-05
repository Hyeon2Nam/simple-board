import ArticleItem from "./ArticleItem";

export default function ArticleList({ list }) {
  return (
    <div>
      {list.length >= 1
        ? list.map((item, index) => <ArticleItem key={index} item={item} />)
        : "글이 없습니다"}
    </div>
  );
}
