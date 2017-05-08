import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = (item, key) => {
  console.log("item", item);
  return (
    <div className="panel panel-default" key={key}>
      <div className="panel-title">D{item.item.title}</div>
      <div className="panel-body">D{item.item.ingredients}</div>
      <div className="panel-footer">{item.item.href}</div>
    </div>
  )
}

const ResultItems = (props) => {
  const recipesList = props.recipesList;
  const recipeItem = recipesList.map((recipe, i) =>
      <ResultItem item={recipe} key={i}/>
  );
  return (
    <div>{recipeItem}</div>
  );
}

const SearchResults = (props) => {
  return (
    <div className="panel-group">
      <ResultItems recipesList={props.recipesList}/>
    </div>
  )
}

SearchResults.propTypes = {
  recipesList: PropTypes.array
}

export default SearchResults;
