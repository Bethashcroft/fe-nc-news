import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news.cyclic.app/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticleById = () => {
  return newsApi.get("/articles/:article_id").then((res) => {
    return res.data.topics;
  });
};
