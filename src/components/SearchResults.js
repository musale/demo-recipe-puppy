import React from 'react';
import PropTypes from 'prop-types';
import Link from 'link-react';
const styles = {
  image: {
    width: 100
  }
}

const ResultItem = (item, key) => {
  console.log("item", item);
  return (
    <div key={key} className="w3-card-2">
      <img className="w3-image w3-rounded" src={item.item.thumbnail} alt={item.item.title} style={styles.image} />  <Link className="btn btn-default" href={item.item.href }>Read the entire recipe</Link>
      <div className="w3-container">
        <h4><b>{item.item.title}</b></h4>
        <p>{item.item.ingredients}</p>
      </div>
      <hr></hr>
    </div>
  )
}

const ResultItems = (props) => {
  const recipesList = props.recipesList;
  const recipeItem = recipesList.map((recipe, i) => <ResultItem item={recipe} key={i}/>);
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
