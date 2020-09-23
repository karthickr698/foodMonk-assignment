import datas from '../Datas/test.json'
import { BOOKING_DATA } from './actionTypes'

const initState = {
    Hoteldata: [...datas.hotels],
}
console.log(initState)
const foodReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default foodReducer;