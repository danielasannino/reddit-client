import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTopic } from '../reddit/redditSlice';

export const Header = () => {
    const currentTopic = useSelector(selectCurrentTopic);
    return (
        <div>
            <h1>Reddit Client</h1>
            <h2>Current Topic: {currentTopic}</h2>
        </div>
    );
};