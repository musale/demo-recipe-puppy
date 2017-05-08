import React from 'react';
import PropTypes from 'prop-types';
import Helpers from '../utils/Helpers';
import SearchResults from '../components/SearchResults';

const InputType = (props) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        onChange={props.handleChange}
        placeholder="ex. onions, omelette" />
    </div>
  );
}

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block">
    Get a recipe</button>
  );
}

const SearchRecipe = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <InputType onChange={props.handleChange} />
      <SubmitButton/>
    </form>
  );
}


SearchRecipe.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default SearchRecipe;
