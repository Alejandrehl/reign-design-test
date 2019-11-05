const request = require("request");
const Article = require("../models/Article");

const getData = () => {
    request("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", (error, response, body) => {
        if (error) return console.log("Error:", error);
        const articles = JSON.parse(body);
        console.log("Número de objetos:", articles.hits.length);
        Article.collection.insert(articles.hits, (error, docs) => {
            if (error) return console.log(error);
            console.log("Multiple docs inserted to collection.");
            console.log(docs);
        })
    });
};

module.exports = getData;