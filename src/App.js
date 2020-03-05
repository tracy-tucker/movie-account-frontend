import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {connect} from 'react-redux';
import {fetchGenres} from './actions/fetchGenres';

class App extends React.Component {

  // componentDidMount() {
    // fetch('http://localhost:3000/api/v1/genres/1')
    // .then(response => response.json())
    // .then(data => console.log(data))
  // }

  componentDidMount() {
    this.props.fetchGenres({type: 'FETCH_GENRES', payload: {name: 'Horror'}})
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
  
}

//accessing values in our currently in store as props.
// const mapStateToProps = (state) => {
//   return {
//     genres: state.genres
//   }
// }

//mapDispatchToProps allows us to dispatch new actions directly to our store

//connect passes the function over to App
//connect can pass, mapStateToProps, mapDispatchToProps, or directly pass in an action creater.
//action creater gives us the ability to update our store directly from fetching component.
export default connect(null, {fetchGenres})(App);
//connect is dispatching
