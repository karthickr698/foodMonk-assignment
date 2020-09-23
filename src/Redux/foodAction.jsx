import { FILTER_HOTELS, SEARCH_HOTELS, ADD_ITEMS, DELETE_ITEMS, FETCH_ITEMS, ADD_BOOKING_DATA, GETCART } from './actionTypes';


export const searchHotel = (name) => {
    return {
        type: SEARCH_HOTELS,
        payload: name,
    };
};

export const filterHotel = (item) => {
    return {
        type: FILTER_HOTELS,
        payload: item,
    };
};

export const addItems = payload => {
    return {
        type: ADD_ITEMS,
        payload
    }
}

export const deleteItems = payload => {
    return {
        type: DELETE_ITEMS,
        payload
    }
}

export const fetchItems = payload => {
    return {
        type: FETCH_ITEMS,
        payload
    }
}

export const addBooking = payload => {
    return {
        type: ADD_BOOKING_DATA,
        payload
    }
}

export const addToCart = () => {
    return {
        type: GETCART
    }
}