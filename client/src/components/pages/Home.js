import React, {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableBody>
                            {articles.map(article => renderRow(article))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    };

    const renderRow = article => {
        const {objectID, story_title, title, author, created_at} = article;
        if (story_title || title) {
            return (
                <TableRow key={objectID}>
                    <TableCell align="left">
                        <Typography>
                            {story_title ? story_title : title}
                            <small className={classes.authorText}>- {author} -</small>
                        </Typography>
                    </TableCell>
                    <TableCell align="left">
                        {created_at}
                    </TableCell>
                </TableRow>
            )
        }
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
    },
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(0),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    authorText: {
        color: "gray",
        marginLeft: 10
    }
}));

export default Home;