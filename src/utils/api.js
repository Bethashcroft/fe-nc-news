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
    return res.data.comments;
  });
};

export const changeVotesByInc = (id) => {
  return newsApi
    .patch(`/articles/${id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      return res.data.article;
    });
};

export const changeVotesByDec = (id) => {
  return newsApi
    .patch(`/articles/${id}`, {
      inc_votes: -1,
    })
    .then((res) => {
      return res.data.article;
    });
};

export const getUsers = () => {
  return newsApi.get("/articles/users").then((res) => {
    return res.data.users;
  });
};

export const postAComment = (article_id, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data.article;
    });
};
