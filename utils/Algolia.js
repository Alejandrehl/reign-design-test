const request = require("request");

const getData = () => {
    request("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", (error, response, body) => {
        if (error) return console.log("Error:", error);
        const articles = JSON.parse(body);
        console.log("Número de objetos:", articles.hits.length);
    });
};

module.exports = getData;