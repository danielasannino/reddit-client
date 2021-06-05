import { kFormatter } from './redditSlice';
import redditReducer from './redditSlice';

const reducer = redditReducer;

const initialState = {
    subredditStatus: 'idle',
    postsStatus: 'idle',
    searchStatus: 'idle',
    discussionStatus: 'idle',
    categories: [],
    posts: [],
    discussion: []
};

describe('redditSlice', () => {
    describe('kFormatter function', () => {
        it('should return the string 2k when given an input of 2000', () => {
            const input = 2000;
            const output = '2k';

            expect(kFormatter(input)).toBe(output);
        })
    })
    describe('reducer', () => {
        it('should return initialState when it is called with an empty state and action', () => {
            expect(reducer(undefined, {})).toEqual(initialState);
        })
    })
})