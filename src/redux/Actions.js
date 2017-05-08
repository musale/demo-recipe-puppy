const startSearching = (searchTerm) => {
  return {type: 'START_SEARCHING', searchTerm: searchTerm}
};
const doneSearching = (recipesList) => {
  return {type: 'DONE_SEARCHING', recipesList: recipesList}
};
const errorSearching = (searchTerm, errorString) => {
  return {type: 'ERROR_SEARCHING', searchTerm: searchTerm, errorString: errorString}
};

const Actions = {
  startSearching: startSearching,
  doneSearching: doneSearching,
  errorSearching: errorSearching,
}

export default Actions;
