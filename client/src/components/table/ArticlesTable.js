import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core";
import ArticlesTableRow from "./ArticlesTableRow";

const ArticlesTable = ({articles, removeArticle}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table size="small" aria-label="a dense table">
                    <TableBody>
                        {articles.map(article => <ArticlesTableRow
                                article={article}
                                key={article.objectID}
                                removeArticle={removeArticle}
                            />
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(0),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
}));


export default ArticlesTable;