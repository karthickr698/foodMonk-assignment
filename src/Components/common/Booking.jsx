import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchItems, deleteItems, addItems } from '../../Redux/foodAction'
import styles from './common.module.css'

function Booking(props) {

    useEffect(() => {
        let id = props.match.params.name;
        props.fetchItems(id)
    }, [])

    const { food_data, amount, addItems, deleteItems } = props
    console.log(props)

    return (
        <div>
            {food_data && food_data.map(ele => {
                return (
                    <>
                        <div className={styles.card}>
                            <div>
                                <h4>{ele.food_name}</h4>
                                <h6>Rs. {ele.rate}</h6>
                            </div>
                            <div className={styles.btn}>
                                {ele.quantity == 0 ? <button class="btn btn-success" style={{ height: "50px", width: "180px" }} onClick={() => { addItems(ele.id) }}>Add</button> :
                                    <>
                                        < button class="btn btn-danger" style={{ height: "50px", width: "40px" }} onClick={() => { deleteItems(ele.id) }}>-</button>
                                        <input class="col-sm-3" style={{ height: "50px", borderTop: "none", borderLeft: "none", borderRight: "none", fontSize: "25px", fontWeight: "bold", textAlign: "center" }} value={ele.quantity} />
                                        <button class="btn btn-success" style={{ height: "50px", width: "40px" }} onClick={() => { addItems(ele.id) }}>+</button>
                                    </>
                                }
                            </div>
                        </div>
                        <hr />
                    </>


                )
            })
            }
            {amount > 0 ? <Link to="/pay">
                <button
                    class="btn btn-primary"
                    style={{ position: "fixed", bottom: "0", fontSize: "40px" }}

                >
                    View Cart
                    </button>
            </Link> : null}

        </div >
    );

}

const mapStateToProps = state => ({
    food_data: state.food.food_data,
    amount: state.food.amount

});
const mapDispatchToProps = dispatch => ({
    fetchItems: (payload) => dispatch(fetchItems(payload)),
    addItems: (payload) => dispatch(addItems(payload)),
    deleteItems: (payload) => dispatch(deleteItems(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
