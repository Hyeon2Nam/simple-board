import api from "../ax/axiosSetting";

export const insertArticle = (article) => {
  return api.post("/board/regist", JSON.stringify(article));
};

export const loadArticleList = () => {
  return api.get("/board/list");
};

export const loadArticle = (obj) => {
  return api.get("/board/find", {
    params: obj,
  });
};

export const deleteArticle = (article) => {
  return api.post("/board/remove", JSON.stringify(article));
};
