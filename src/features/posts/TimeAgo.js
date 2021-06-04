import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';

    if (timestamp) {
        const unixTimeStamp = timestamp;
        const millisecs = unixTimeStamp * 1000;
        const date = new Date(millisecs);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago.`
    }

    return (
        <span title={timestamp}>
            &nbsp;{timeAgo}
        </span>
    );
};