import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import logos from '../logo.jpg';
import swal from 'sweetalert'
import Home from '../Components/common/Home';
import Booking from '../Components/common/Booking';
import Payment from '../Components/common/Payment';
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';
import Profile from '../Components/common/Profile'


class Routing extends Component {
    render() {
        const { isauth } = this.props;
        return (
            <>
                <div className=" p-3">
                    <h2 className="text-center display-5">Vehicle Renting</h2>
                    <ul className="nav">
                        <li className="image img-fluid">
                            <img height="100px" className="nav-img" src={logos} alt="." />
                        </li>
                        <li
                            onClick={this.change}
                            name="home"
                            className="nav-item "
                            style={{ marginTop: "30px", fontSize: "20px" }}
                        >
                            <Link
                                onClick={this.change}
                                name="home"
                                to="/"
                                className="text-dark nav-link active"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginTop: "30px", fontSize: "20px" }}>
                            <Link
                                onClick={this.change}
                                name="book"
                                to="/booking"
                                className="nav-link text-dark"
                            >
                                Bookings
                            </Link>
                        </li>
                        <li className="nav-item mr-auto" style={{ marginTop: "30px", fontSize: "20px" }}>
                            <Link
                                onClick={this.change}
                                name="user"
                                to="/user"
                                className="nav-link text-dark"
                            >
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            {isauth ? (
                                <button
                                    onClick={() => {
                                        swal("Logout Successful", "", "success")
                                        this.props.logout()
                                    }}
                                    className="btn btn-dark"
                                    style={{ marginTop: "30px" }}
                                >
                                    Log Out
                                </button>
                            ) : (
                                    <div>
                                        <li
                                            className="nav-item"
                                            style={{ marginTop: "30px", float: "left" }}
                                        >
                                            <Link to="/register" className="text-dark nav-link">
                                                Register
                    </Link>
                                        </li>
                                        <li
                                            className="nav-item"
                                            style={{ marginTop: "30px", float: "left" }}
                                        >
                                            <Link to="/login" className="text-dark nav-link">
                                                Login
                    </Link>
                                        </li>
                                    </div>
                                )}
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="">
                    <Switch>
                        <Route exact path="/" component={() => <Home />} />
                        <Route
                            path="/register"
                            component={(props) => <Register {...props} />}
                        />
                        <Route path="/login" component={(props) => <Login {...props} />} />
                        <Route exact path="/booking" component={() => <Booking />} />
                        <Route exact path="/user" component={() => <Profile />} />
                        <Route
                            exact
                            path="/booking/:name"
                            component={(props) => <Booking {...props} />}
                        />
                        <Route
                            path="/booking/:name/pay"
                            component={(props) => <Payment {...props} />}
                        />
                        <Route render={() => <div>404 Not Fount</div>} />
                    </Switch>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Routing);
