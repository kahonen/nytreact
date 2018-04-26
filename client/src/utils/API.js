import axios from "axios";
//import request from "request";

export default {

  loadArticles: (topic, startDate, endDate) => {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        'api-key': "337e03a044fb416fa8417217b988c4d3",
        'q': topic,
        'begin_date': startDate,
        'end_date': endDate,
        'sort': "newest"
      }
    })
  },
  // Gets the book with the given id
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticles: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticles: function (articleData) {
    console.log(articleData)
    return axios.post("/api/articles", articleData);
  }
};
