const request = require("request");
const CronJob = require('cron').CronJob;
const Article = require("../models/Article");

const getData = () => {
    //new CronJob('0 0 * * * *', function() {
    new CronJob('*/10 * * * * *', function() {
        console.log('You will see this message every hour');

        request("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", (error, response, body) => {
            if (error) return console.log("Error:", error);

            const articles = JSON.parse(body);

            Article.collection.insertMany(articles.hits, (error, docs) => {
                if (error) console.log(error.err.errmsg);
                const d = new Date();
                console.log("DOCS:", docs);
                console.log("Multiple docs inserted to collection: ", d);
            })

        });

    }, null, true, 'America/New_York');
};

module.exports = getData;