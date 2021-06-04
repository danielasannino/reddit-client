import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios')

export const fetchSubreddits = createAsyncThunk('reddit/fetchSubreddits', async () => {
  try {
    const response = await axios.get('https://www.reddit.com/subreddits.json')
    console.log(response.data)
    const subredditArray = response.data.data.children
    const categories = subredditArray.map(item => item.data.display_name_prefixed)
    return categories
  } catch (error) {
    console.log(error)
  }
})

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async () => {
  try {
    const response = await axios.get('https://www.reddit.com/r/popular.json')
    console.log(response.data)
    const postsArray = response.data.data.children
    const posts = postsArray.map(item => {
      return {
        title: item.data.title,
        author: item.data.author_fullname,
        subreddit: item.data.subreddit_name_prefixed,
        imgUrl: item.data.url,
      }
    })
    return posts
  } catch (error) {
    console.log(error);
  }
})

export const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    categories: ['r/Skiing', 'r/Fishing', 'r/Coding', 'r/Cooking', 'r/Camping', 'r/Flying'],
    currentTopic: 'r/popular',
    posts: [
      {
        title: 'Test Title 1',
        author: 'Daniela Sannino',
        subreddit: 'r/Test',
        imgUrl: 'https://preview.redd.it/zf114gzw4l261.jpg?width=640&crop=smart&auto=webp&s=0b090780618414c8dc4c870079046d11a9d07f7d',
      },
      {
        title: 'Test Title 2',
        author: 'Daniela Sannino',
        subreddit: 'r/Test2',
        imgUrl: 'https://preview.redd.it/zf114gzw4l261.jpg?width=640&crop=smart&auto=webp&s=0b090780618414c8dc4c870079046d11a9d07f7d',
      },
      {
        title: 'Test Title 3',
        author: 'Daniela Sannino',
        imgUrl: 'https://preview.redd.it/zf114gzw4l261.jpg?width=640&crop=smart&auto=webp&s=0b090780618414c8dc4c870079046d11a9d07f7d',
      },
    ]
  },
  reducers: {},
  extraReducers: {
    [fetchSubreddits.fulfilled]: (state, action) => {
      state.categories = action.payload
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    }
  }
});

export const selectCategories = state => state.reddit.categories;

export const selectPosts = state => state.reddit.posts;

export const selectCurrentTopic = state => state.reddit.currentTopic;

export default redditSlice.reducer;