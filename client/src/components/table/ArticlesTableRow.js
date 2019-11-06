import React, {useState} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core";

const ArticlesTableRow = ({article, removeArticle}) => {
    const classes = useStyles();
    const {objectID, story_title, title, author, created_at} = article;
    const [hover, setHover] = useState(false);

    const handleRemove = id => {
        removeArticle(id);
    };

    return (
        <TableRow
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
            <TableCell align="left" className={classes.rowText}>
                {hover && <DeleteIcon onClick={() => handleRemove(objectID)}/>}
            </TableCell>
        </TableRow>
    );
};

const useStyles = makeStyles(theme => ({
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

export default ArticlesTableRow;