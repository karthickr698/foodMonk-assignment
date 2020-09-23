import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <>
                Home
            </>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
