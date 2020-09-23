import React from "react";
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterHotel } from "../../Redux/foodAction";
import styles from './common.module.css'

function Table({ data, totalData, changePage, changePageData, filter, num, curr_page }) {
    let paginate = [];
    let j = 1;

    if (data.length > paginate.length) {
        for (let i = 0; i < totalData.length; i += Number(num)) {
            paginate.push(j);
            j++;
        }
    }

    const changeHandler = e => {
        filter(e.target.value);
    };
    return (
        <div>
            <div className=" row m-auto ">
                <div className="col-md-12" style={{ textAlign: "center" }}>
                    <select className="form-control" onChange={changeHandler}>
                        <option disabled selected>
                            Filter Data
                        </option>
                        <option>Show All</option>
                        <option>Rating Lower to Higher</option>
                        <option>Rating Higher to Lower</option>
                    </select>
                </div>
            </div>
            <div className="row col-md-12 mt-4">
                {data.map(ele => {
                    return (
                        <div className="col-md-4 my-2 my_card" key={ele.id} data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="false">
                            <div className="card">
                                <img
                                    height="200px"
                                    src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2019-12/12.%20gallery%20857x491_10.jpg"
                                    className="card-img"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-title text-center">Name : {ele.name}</p>
                                    <p className="card-text text-center">Location : {ele.location}</p>
                                    <p className="card-text text-center">Rating : {ele.rating}</p>
                                    <hr />
                                    <Link to={`/booking/${ele.id}`} style={{ textDecoration: "none" }}>
                                        <button className="text-success btn btn-outline-light mx-auto d-block">
                                            Book Now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr />
            <div>
                <ul className="pagination pagination-lg justify-content-center" data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="100" data-aos-duration="200" data-aos-easing="ease-in-out" data-aos-once="true">
                    {paginate.map(ele => {
                        if (ele === curr_page) {
                            return (
                                <li className="page-item active">
                                    <Button
                                        className={styles.active}
                                        onClick={() => {
                                            return changePage(ele);
                                        }}
                                        key={ele}
                                    >
                                        {ele}
                                    </Button>
                                </li>
                            );
                        }
                        else {
                            return (
                                <li className="page-item active">
                                    <Button
                                        className={styles.page}
                                        onClick={() => {
                                            return changePage(ele);
                                        }}
                                        key={ele}
                                    >
                                        {ele}
                                    </Button>
                                </li>
                            );

                        }
                    })}
                </ul>
                <div className="col-md-3 offset-1 mx-auto d-block" >
                    <select
                        className="form-control"
                        onChange={e => {
                            changePageData(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            select per page
                    </option>
                        <option>6</option>
                        <option>30</option>
                        <option>45</option>
                        <option>60</option>
                        <option>100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    filter: item => dispatch(filterHotel(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
