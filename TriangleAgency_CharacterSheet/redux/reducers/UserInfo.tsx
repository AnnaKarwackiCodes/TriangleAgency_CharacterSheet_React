import { createSlice, configureStore } from '@reduxjs/toolkit'

const userInfo = createSlice({
  name: 'user info',
  initialState: {
    AQ1: '',
    AQ2: '',
    AQ3: '',
    AQ4: '',
    AQ5: '',
    AQ6: '',
    AQ7: '',
  },
  reducers: {
    setAQ: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('reducer state change: ' + action.payload.question + ' ' + action.payload.value);
      switch(action.payload.question){
        case 'AQ1':
          console.log('I AM HERE');
          console.log(state.AQ1);
          state.AQ1 = action.payload.value;
          console.log(state.AQ1);
          break;
        case 'AQ2':
          state.AQ2 = action.payload.value;
          break;
        case 'AQ3':
          state.AQ3 = action.payload.value;
          break;
        case 'AQ4':
          state.AQ4 = action.payload.value;
          break;
        case 'AQ5':
          state.AQ5 = action.payload.value;
          break;
        case 'AQ6':
          state.AQ6 = action.payload.value;
          break;
        case 'AQ7':
          state.AQ7 = action.payload.value;
          break;
      }
    }
  }
})

export const { setAQ } = userInfo.actions

export default userInfo.reducer;