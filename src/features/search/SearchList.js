import React, { useEffect } from 'react';
import { PostCard } from '../posts/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchSearch } from '../reddit/redditSlice';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export const SearchList = () => {
    let { searchTerm } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearch(searchTerm));
    }, [dispatch, searchTerm]);

    const posts = useSelector(selectPosts);
    // const postsList = posts.map(post => {
    //     return <PostCard
    //         post={post}
    //         key={post.id} />
    // })

    return (
        <div>
            <Typography variant='h6' color='textPrimary'>
                Search Results: ({searchTerm})
            </Typography>
            {
                posts && posts.map(post => {
                    return <PostCard
                        post={post}
                        key={post.id}
                    />
                })
            }
        </div>
    );
};