import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'reactstrap';
import ReactToPrint from 'react-to-print';

class PrintDatas extends React.Component {

    render() {
        const { ordersData } = this.props
        if (ordersData.length > 0) {
            return (
                <div>
                    <Table >
                        <thead>
                            <h2>Order Details</h2>
                        </thead>
                        <tbody>
                            {ordersData.map((item) =>
                                <tr>
                                    <td>
                                        <p>Bill Id : {item.billId}</p>
                                        <p>Order Time : {item.time}</p>
                                        <p></p>
                                        <p>Hotel Name : {item.HotelName}</p>
                                        <p>Hotel Location : {item.HotelLocation}</p>
                                    </td>
                                    <td>
                                        {item.items.map((ele) => {
                                            return (
                                                <p>{ele.food_name} - {ele.quantity}</p>
                                            )
                                        })}
                                    </td>
                                    <td>
                                        <p>Payment Mode : {item.paymentMethod}</p>
                                        <p>Total Amount : {item.total}</p>
                                        <p>Discount : {item.Discount}</p>
                                        <p>Paid Amount : {item.paidAmount}</p>
                                    </td>
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

class Print extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {
                        return <a href="#">Print this out!</a>;
                    }}
                    content={() => this.componentRef}
                />
                <PrintDatas ordersData={this.props.ordersData} ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ordersData: state.food.ordersData
});


export default connect(mapStateToProps, null)(Print);