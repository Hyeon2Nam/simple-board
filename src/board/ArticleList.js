import ArticleItem from "./ArticleItem";

export default function ArticleList({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <ArticleItem key={index} item={item} />
      ))}
    </div>
  );
}
