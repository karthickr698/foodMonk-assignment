import { BOOKING_DATA } from './actionTypes'

const initState = {
    data: [],
}
console.log(initState.data)
const foodReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default foodReducer;