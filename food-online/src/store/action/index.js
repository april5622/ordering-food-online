//import axios from "axios";
import { axiosWithAuth } from "../../axiosWithAuth";
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_RESTAURANTS_START = "FETCH_RESTAURANTS_START";



export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
    return axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err})
    })
}



export const getRestaurants = () => {
  //dispatch({ type: FETCH_RESTAURANTS_START });

    // axios
    //   .get("")
    //   .then((res) => {
    //     console.log("res", res);
    //     dispatch({ type: FETCH_RESTAURANTS_START, payload: res.data });
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
};
