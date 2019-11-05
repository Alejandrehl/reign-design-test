const request = require("request");
const Article = require("../models/Article");

const getData = () => {
    request("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", (error, response, body) => {
        if (error) return console.log("Error:", error);
        const articles = JSON.parse(body);
        Article.collection.insertMany(articles.hits, (error, docs) => {
            if (error) console.log(error.err.errmsg);
            console.log("Multiple docs inserted to collection.");
        })
    });
};

module.exports = getData;