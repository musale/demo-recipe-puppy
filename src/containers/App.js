import React, {PropTypes} from 'react';
import Helpers from '../utils/Helpers';
import Header from '../components/Header';
import SearchRecipe from '../components/SearchRecipe';
import SearchResults from '../components/SearchResults';
import Actions from '../redux/Actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.startSearching(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchTerm = event.target.value;
    Helpers.getRecipes(searchTerm).then((response) => {
      if (response.status !== 200) {
        this.props.errorSearching(searchTerm, response.message);
      } else {
        this.props.doneSearching(response.data.results);
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <SearchRecipe handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <SearchResults recipesList={this.props.recipesList}/>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    recipesList: state.searchReducer.recipesList
  }
};
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props...
    startSearching: (searchTerm) => dispatch(Actions.startSearching(searchTerm)),
    doneSearching: (recipesList) => dispatch(Actions.doneSearching(recipesList)),
    errorSearching: (searchTerm, errorString) => dispatch(Actions.errorSearching(searchTerm, errorString))
  }
};
// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App);
