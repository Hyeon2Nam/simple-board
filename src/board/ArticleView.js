import { useParams } from "react-router-dom";

export default function ArticleView() {
  const params = useParams();

  console.log(params);
}
