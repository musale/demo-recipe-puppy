import React, {PropTypes} from 'react';
import Helpers from '../utils/Helpers';
import SearchRecipe from '../components/SearchRecipe';
import SearchResults from '../components/SearchResults';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    Helpers.getRecipes(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <SearchRecipe
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <SearchResults />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}

export default Search;
