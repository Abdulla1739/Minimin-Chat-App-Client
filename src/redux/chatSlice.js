import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    username: '',
    messages: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    addMessage: (state, action) => {
      const { username, message, timestamp } = action.payload;
      state.messages.push({ username, message, timestamp });
    },
  },
});

export const { setUsername, addMessage } = chatSlice.actions;

export default chatSlice.reducer;