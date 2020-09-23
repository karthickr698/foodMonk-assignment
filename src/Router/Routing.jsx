import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Components/Home';




class Routing extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route render={() => <div>404 Not Fount</div>} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Routing);
