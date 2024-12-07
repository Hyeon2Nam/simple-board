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
  console.log(article);

  return api.post("/board/remove", JSON.stringify(article));
};

export const countAticleGood = (article) => {
  return api.post("/board/good", JSON.stringify(article));
};

export const editArticle = (article) => {
  return api.post("/board/modify", JSON.stringify(article));
};

export const searchArticle = (obj) => {
  return api.get("/board/list", {
    params: obj,
  });
};
