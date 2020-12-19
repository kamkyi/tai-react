import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Create from './Create';
import Edit from './Edit';
import Index from './Sai';
import { connect } from 'react-redux';
import * as actionTypes from './action/'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD Tutorial</h2> <br />
          <h5><b>{this.props.counter}</b></h5>
          <button onClick={this.props.decreaseCounterByOne}>Decrease -</button>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
        </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
       counter:state.user.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
      decreaseCounterByOne :() => dispatch({type:actionTypes.decrease})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);