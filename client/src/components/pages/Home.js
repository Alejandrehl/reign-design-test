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
    const [hover, setHover] = useState(false);

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
                <TableRow
                    key={objectID}
                    className={`${classes.row} ${hover && classes.rowHover}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <TableCell align="left">
                        <Typography className={classes.rowText}>
                            {story_title ? story_title : title}
                            <label className={classes.authorText}>- {author} -</label>
                        </Typography>
                    </TableCell>
                    <TableCell align="left" className={classes.rowText}>
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
    row: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff"
    },
    rowHover: {
        backgroundColor: "#ccc"
    },
    rowText: {
        color: "#333",
        fontSize: 13,
    },
    authorText: {
        color: "#999",
        marginLeft: 10
    }
}));

export default Home;