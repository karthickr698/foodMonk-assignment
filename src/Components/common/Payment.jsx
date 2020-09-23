import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ISLoader from "./ISLoader";
import swal from "sweetalert"
import { addBooking, addToCart } from '../../Redux/foodAction'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Payment = (props) => {
    const { className, hotelData, cartData, amount } = props
    console.log(cartData)

    const [modal, setModal] = useState(false);
    const [iscoupon, setIscoupon] = useState(false)
    const [coupon_value, setValue] = useState(0)
    const [pay, setPay] = useState(0)

    const toggle = () => setModal(!modal);

    const handleSubmit = () => {
        setModal(!modal)
    }

    const handleChange = (e) => {
        setPay(e.target.value)
    }

    const handleCoupon = (e) => {
        setIscoupon(true);
        setValue(e.target.value)
    }

    let billId = 4251

    const [loading, setLoading] = useState(false);

    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + "  "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    const clickHandler = () => {
        setLoading(true);
        let bill_data = {
            "billId": String(billId + cartData.length),
            "time": datetime,
            "totalAmount": String(amount),
            "HotelName": hotelData.name,
            "HotelId": hotelData.id,
            "HotelLocation": hotelData.location,
            "items": cartData,
            "Discount": coupon_value,
            "total": amount,
            "paidAmount": amount - coupon_value,
            "paymentMethod": String(pay),
        }
        props.addBooking(bill_data)
        const timer = setTimeout(() => {
            setLoading(false);
            swal("Payment Successful", "Your booking has been made! ", "success");
            props.history.push("/");
        }, 2000);
        return () => clearTimeout(timer);
    };

    useEffect(() => {

        props.addToCart();

    }, [])

    if (loading) {
        return <ISLoader />;
    }
    else {
        return (
            <div>

                <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
                    <div className="card-header">
                        Bill Details
                    </div>
                    <div className="card-body">
                        <p className="card-text">Hotel Name : {hotelData.name}</p>
                        <p className="card-text">Location : {hotelData.location}</p>
                        <h2 className="card-text">Items</h2>
                        {cartData && cartData.map(ele => {
                            return (
                                <p className="card-text">{ele.food_name} : {ele.quantity} * {ele.rate} = {(ele.quantity) * (ele.rate)}</p>
                            )
                        })}
                        {!iscoupon ? <h1 className="card-text">Total Payable Amount : {amount}</h1> :
                            <h1 className="card-text">Total  Amount : {amount}</h1>}
                        {iscoupon ? <strong>Discount Amount : {coupon_value}</strong> : null}
                        {iscoupon ? <h1 className="card-text">Total Payable Amount : {amount - coupon_value}</h1> : null}
                    </div>
                </div>

                <Button color="success" onClick={toggle}>Apply Coupon</Button>
                <Modal isOpen={modal} modalTransition={{ timeout: 100 }} backdropTransition={{ timeout: 100 }}
                    toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle} className="text-center">Coupons</ModalHeader>
                    <ModalBody >
                        <div onChange={handleCoupon}>
                            <label>
                                <input type="radio" value="100" name="gender" />Hotel Coupon Code for All Users : 40% Off upto Rs. 700 on Vehicle rental Order
                            </label>
                            <hr />
                            <label>
                                <input type="radio" value="200" name="gender" />Hotel Promo Code - Avail Instant Rewards upto Rs. 500 on Orders via Paytm
                            </label>
                            <hr />
                            <label>
                                <input type="radio" value="300" name="gender" />Hotel Coupon Code for All Users : 40% Off upto Rs. 800 on Orders via Tez
                            </label>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <br />
                <br />

                <div className="col-md-6 offset-1 mx-auto d-block">
                    <select
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option disabled selected className="text-center">
                            Select Payment Mode
                            </option>
                        <option>Tez</option>
                        <option>Paytm</option>
                        <option>Credit Card</option>
                        <option>Debit Card</option>
                    </select>
                </div>
                <br />

                <button className="btn btn-primary" onClick={clickHandler}>PAY</button>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    cartData: state.food.cartData,
    hotelData: state.food.hotelData,
    amount: state.food.amount

})

const mapDispatchToProps = dispatch => ({
    addBooking: (payload) => dispatch(addBooking(payload)),
    addToCart: () => dispatch(addToCart()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Payment);