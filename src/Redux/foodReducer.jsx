import datas from '../Datas/test.json'
import { FILTER_HOTELS, SEARCH_HOTELS, ADD_ITEMS, DELETE_ITEMS, FETCH_ITEMS, ADD_BOOKING_DATA, GETCART } from './actionTypes';

const initState = {
    data: [...datas.hotels],
    hotelData: [],
    cartData: [],
    copyOfData: [...datas.hotels],
    filteredData: [...datas.hotels],
    food_data: [],
    amount: 0,
    ordersData: []
}
console.log(initState)
const foodReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_HOTELS:
            let name = action.payload.toLowerCase();
            let filterArr = state.data.filter((ele) =>
                ele.name.toLowerCase().includes(name)
            );
            if (name === "") {
                filterArr = state.copyOfData;
            }
            return {
                ...state,
                data: [...filterArr],
            };

        case FILTER_HOTELS: {
            let target = action.payload;
            let bookings = [];
            if (target === "Show All") {
                bookings = state.copyOfData;
            }
            else if (target === "Rating Lower to Higher") {
                bookings = state.copyOfData.sort((a, b) => {
                    return a.rating - b.rating;
                });
            } else {
                bookings = state.copyOfData.sort((a, b) => {
                    return b.rating - a.rating;
                });
            }
            return {
                ...state,
                data: [...bookings],
            };
        }
        case FETCH_ITEMS:
            let item_data = state.data.find(ele => {
                return ele.id == action.payload;
            });
            for (let i = 0; i < item_data.foods.length; i++)
                item_data.foods[i]["quantity"] = 0;
            return {
                ...state,
                hotelData: item_data,
                food_data: item_data.foods
            }
        case ADD_ITEMS:
            let add = []
            let add_amt = state.amount
            for (let i = 0; i < state.food_data.length; i++) {
                let items = state.food_data[i]
                if (items.id == action.payload) {
                    items.quantity = items.quantity + 1
                    add_amt = add_amt + (items.rate)
                }

                add.push(items)
            }
            console.log(add)
            return {
                ...state,
                food_data: add,
                amount: add_amt
            }
        case DELETE_ITEMS:
            let reduce_item = []
            let reduce_amt = Number(state.amount)
            for (let i = 0; i < state.food_data.length; i++) {
                let items = state.food_data[i]
                if (items.id == action.payload) {
                    items.quantity = items.quantity - 1
                    reduce_amt = reduce_amt - (items.price)
                }
                reduce_item.push(items)
            }
            return {
                ...state,
                food_data: reduce_item,
                amount: reduce_amt
            }
        case GETCART:
            let cart = []
            for (let i = 0; i < state.food_data.length; i++) {
                let items = state.food_data[i]
                if (items.quantity > 0) {
                    cart.push(items)
                }
            }
            return {
                ...state,
                cartData: cart
            }
        case ADD_BOOKING_DATA:
            return {
                ...state,
                ordersData: [...state.ordersData, action.payload]
            }
        default:
            return state;
    }
}

export default foodReducer;