import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import api from "../../utils/Api";

const Home = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        api("api/articles")
            .then(res => setArticles(res.data))
            .catch(e => console.log("Error:", e));
    }, [articles]);

    const renderArticles = () => {
        if (!articles) return;
        return (
            <div>
                {articles.map(article => <h6 key={article.objectID}>{article.title}</h6>)}
            </div>
        );
    };

    return (
        <div>
            <CssBaseline />
            <div className={classes.paper}>
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
    paper: {
        backgroundColor: "black",
        padding: theme.spacing(7, 4),
    },
    paperText: {
        color: "white"
    }
}));

export default Home;