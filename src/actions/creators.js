import * as Constants from "./constants";

import * as ArticlesService from "../services/article";
function getArticles() {
  return {
    type: Constants.FETCH_ARTICLES,
  };
}
function getArticlesSuccess(articles) {
  return {
    type: Constants.FETCH_ARTICLES_SUCCESS,
    payload: {
      articles: articles,
    },
  };
}
function getArticlesFailure(error) {
  return {
    type: Constants.FETCH_ARTICLES_FAILURE,
    payload: {
      error: error,
    },
  };
}
function getArticlesThunk() {
  return function(dispatch) {
    dispatch(getArticles());
    ArticlesService.getArticles()
      .then((articles) => dispatch(getArticlesSuccess(articles)))
      .catch((error) => dispatch(getArticlesFailure(error)));
  };
}
function getArticleDetails(url) {
  return {
    type: Constants.FETCH_ARTICLE_DETAILS,
    payload: {
      url: url,
    },
  };
}
function getArticleDetailsSuccess(article) {
  return {
    type: Constants.FETCH_ARTICLE_DETAILS_SUCCESS,
    payload: {
      article: article,
    },
  };
}
function getArticleDetailsFailure(error) {
  return {
    type: Constants.FETCH_ARTICLE_DETAILS_FAILURE,
    payload: {
      error: error,
    },
  };
}
function getArticleDetailsThunk(url) {
  return function(dispatch) {
    dispatch(getArticleDetails(url));
    ArticlesService.getArticle(url)
      .then((article) => dispatch(getArticleDetailsSuccess(article)))
      .catch((error) => dispatch(getArticleDetailsFailure(error)));
  };
}

export {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  getArticlesThunk,
  getArticleDetails,
  getArticleDetailsSuccess,
  getArticleDetailsFailure,
  getArticleDetailsThunk,
};
