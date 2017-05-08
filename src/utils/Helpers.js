import axios from 'axios';

const showSearchTerm = (searchTerm) => {
  alert(`You searched ${searchTerm}`);
};

const getRecipes = (searchTerm) => {
  return axios.get(`http://www.recipepuppy.com/api/?q=${searchTerm}`);
}

const recipesResponse = (searchTerm) => {
  getRecipes(searchTerm).then(
    (response) => {
      console.log(response.data.results);
      return response.data.results;
    }
  )
}


const Helpers = {
  showSearchTerm: showSearchTerm,
  getRecipes: recipesResponse
}

export default Helpers;
