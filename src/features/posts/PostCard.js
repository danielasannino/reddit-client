import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { TimeAgo } from './TimeAgo'
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: 10,
        backgroundColor: '817b7b',
    }
});

export const PostCard = (props) => {
    const { post } = props;
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/discussion/${post.subreddit}/${post.id}`} onClick={() => window.scrollTo(0, 0)}>
                <CardMedia
                    component="img"
                    alt=""
                    image={post.imgUrl}
                    title={post.title}
                />
                {post.videoUrl && <CardMedia
                    component="video"
                    height="200"
                    autoPlay
                    controls
                    image={post.videoUrl}
                    title={post.title}
                />}

                <CardContent>
                    <Grid container direction="row" alignItems="center">
                        <SwapVertOutlinedIcon fontSize="small" />
                        <Typography variant="caption" align="left">
                            {post.ups}
                        </Typography>
                    </Grid>

                    <Typography variant="body1" color="textSecondary">
                        Posted by {post.author}
                        <TimeAgo timestamp={post.created_utc} />
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        {post.title}
                    </Typography>
                    <Typography>
                        {`r/${post.subreddit}`}
                    </Typography>

                    <Grid container direction="row" alignItems="center">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <Typography variant="caption" align="left">
                            {post.num_comments}
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
