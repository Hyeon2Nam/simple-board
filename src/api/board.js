import api from "../ax/axiosSetting";

export const insertArticle = (article) => {
  return api.post("/board/regist", JSON.stringify(article));
};

export const loadArticleList = () => {
  return api.get("/board/list");
};
