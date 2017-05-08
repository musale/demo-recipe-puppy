import { combineReducers } from 'redux';

const defaultState = {
  recipesList: [],
  searchTerm: '',
  isSearching: false,
  searchingError: ''
};

const searchReducer = (state = defaultState, action) => {
  let {recipesList, searchTerm, isSearching, searchingError} = state;

  switch (action.type) {

    case 'START_SEARCHING':
      recipesList = [];
      searchTerm = action.searchTerm.trim();
      isSearching = true;
      searchingError = '';
      break;

    case 'DONE_SEARCHING':
      recipesList = action.recipesList;
      isSearching = false;
      break;

    case 'ERROR':
      searchingError = action.errorString;
      searchTerm = action.searchTerm;
      isSearching = false;
      break;
    default:
          return state;
  }
  return {recipesList, searchTerm, isSearching, searchingError};
}

export default combineReducers({
  searchReducer: searchReducer,
});
