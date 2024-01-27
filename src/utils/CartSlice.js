const { createSlice, current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // vanila redux  => don't mutate state
      // const newState = {...state}
      // newState.items.push(action.payload);
      // return newState;

      // mutating our state
      // redux-toolkit
      // internally redux-toolkit uses immer (changes before-after - convient way for immutable state)
      // RTK says that either mutate the state or return the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      let index = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      // console.log(current(state));
      // state.items.length = 0;
      return { items: [] };
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
