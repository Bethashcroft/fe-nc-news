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

export const getArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsById = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    console.log(res.data, "we are in the api");
    return res.data.comments;
  });
};
