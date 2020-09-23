import React, { useState } from "react";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import { searchHotel } from '../../Redux/foodAction'

function Home({ data, searchHotel }) {


    const [pageNo, setPageNo] = useState(1);
    const [noOfData, setNoOfData] = useState(6);
    const [search, setSearch] = useState("");
    const indexPrevData = Math.floor((pageNo - 1) * noOfData);
    const indexCurrData = pageNo * noOfData;
    const dataToShow = data.slice(indexPrevData, indexCurrData);

    const changePageData = num => {
        setNoOfData(num);
        return setPageNo(1);
    };

    const changeHandler = e => {
        setSearch(e.target.value);
        searchHotel(e.target.value);
    };

    const changePage = (num) => {
        return setPageNo(num);
    };
    return (
        <div >
            <div data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" >
                <div className="col-md-5 m-auto p-4">
                    <input
                        style={{ textAlign: "center" }}
                        className="form-control"
                        placeholder="search Hotels "
                        value={search}
                        onChange={changeHandler}
                    />
                </div>
                <div className="col-md-10 m-auto p-4">
                    <h2 className="text-center pb-3">All Hotels</h2>
                    <DataTable
                        data={dataToShow}
                        totalData={data}
                        changePage={changePage}
                        num={noOfData}
                        changePageData={changePageData}
                        curr_page={pageNo}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.food.data,
});
const mapDispatchToProps = dispatch => ({
    searchHotel: item => dispatch(searchHotel(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
