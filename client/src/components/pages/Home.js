import React, {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';

import api from "../../utils/Api";
import ArticlesTable from "../table/ArticlesTable";

const Home = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        api.get("api/articles")
            .then(res => {
                const newArticles = res.data.filter(article => !article.removed);
                setArticles(newArticles);
            }).catch(e => console.log("Error:", e));
    }, [articles]);

    const renderArticles = () => {
        if (!articles) return;
        return <ArticlesTable articles={articles} removeArticle={removeArticle}/>;
    };

    const removeArticle = id => {
        api.put(`api/articles/${id}`)
            .then(res => console.log(res))
            .catch(e => console.log("Error:", e));
    };

    return (
        <div>
            <CssBaseline/>
            <div className={classes.header}>
                <Typography variant="h1" className={classes.paperText}>
                    HN Feed
                </Typography>
                <Typography variant="h5" className={classes.paperText}>
                    {"We <3 hacker news!"}
                </Typography>
            </div>
            {renderArticles()}
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: "black",
        padding: theme.spacing(7, 4),
    },
    paperText: {
        color: "white"
    }
}));

export default Home;