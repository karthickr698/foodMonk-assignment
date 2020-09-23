import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Table } from 'reactstrap';

class OrderedDatas extends React.Component {

    render() {
        const { ordersData } = this.props
        if (ordersData.length > 0) {
            return (
                <div>
                    <Link to="/print">
                        <button className="btn btn-primary">Print</button>
                    </Link>

                    <Table >
                        <thead>
                            <tr>
                                <th>Bill Id</th>
                                <th>Time</th>
                                <th>Hotel Name</th>
                                <th>Hotel Location</th>
                                <th>Items</th>
                                <th>Payment Mode</th>
                                <th>Bill Amount</th>
                                <th>Discount</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersData.map((item) =>
                                <tr>
                                    <td>{item.billId}</td>
                                    <td>{item.time}</td>
                                    <td>{item.HotelName}</td>
                                    <td>{item.HotelLocation}</td>
                                    {item.items.map((ele) => {
                                        return (
                                            <tr>{ele.food_name} - {ele.quantity}</tr>
                                        )
                                    })}
                                    <td>{item.paymentMethod}</td>
                                    <td>{item.total}</td>
                                    <td>{item.Discount}</td>
                                    <td>{item.paidAmount}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Sorry, No booking made</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    ordersData: state.food.ordersData
});


export default connect(mapStateToProps, null)(OrderedDatas);