//import axios from "axios";

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START';


export const getRestaurants = () => {
    dispatch({type: FETCH_RESTAURANTS_START});

    axios
        .get("")
        .then(res => {
            console.log("res", res);
            dispatch({type: FETCH_RESTAURANTS_START, payload: res.data});
        })
        .catch(err => {
            console.log("err", err)
        })
};

