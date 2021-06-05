import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DiscussionCard } from './DiscussonCard';
import { selectDiscussion, fetchDiscussion } from '../reddit/redditSlice';
import { Typography } from '@material-ui/core'

export const DiscussionList = () => {
    let { id, subreddit } = useParams();
    const discussion = useSelector(selectDiscussion);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscussion(`r/${subreddit}/${id}.json`))
    }, [subreddit, id, dispatch])

    return (
        <div>
            <Typography variant='h4' color='textPrimary'>
                {`r/${subreddit}`}
            </Typography>
            {
                discussion.length ? discussion.map(post => {
                    return <DiscussionCard
                        post={post}
                        key={post.id}
                    />
                })
                    :
                    <Typography variant='h6' color='textPrimary'>
                        Sorry, no replies found!
                </Typography>
            }
        </div>
    );

};