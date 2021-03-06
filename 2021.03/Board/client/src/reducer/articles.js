import produce from 'immer';

const initialState = {
  articles : [],

};

const reducer = produce((state, action)=>{
  switch (action.type) {
    case 'GET_ARTICLES':
      state.articles = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;