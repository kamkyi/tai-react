import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './action'

class Sai extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to User Index</h1>
                <p>I'm counter from global {this.props.counter}</p><h1>Haha</h1>
                <button onClick={this.props.increaseCountByOne}>Counter + 1</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter:state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCountByOne: () => dispatch({type:actionTypes.increase})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sai);