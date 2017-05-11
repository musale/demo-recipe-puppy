import axios from 'axios';

const getRecipes = (searchTerm) => {
  console.log("searchTerm", searchTerm);
  return axios.get(`http://www.recipepuppy.com/api/?q=${searchTerm}`);
  // return axios.get(`http://localhost:3000/recipe-puppy/?q=${searchTerm}`);
}

const Helpers = {
  getRecipes: getRecipes
}

export default Helpers;
