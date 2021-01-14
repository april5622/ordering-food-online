import { axiosWithAuth } from "../../axiosWithAuth";

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_RESTAURANTS_START = "FETCH_RESTAURANTS_START";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_FAIL = "FETCH_RESTAURANTS_FAIL";
export const FETCH_MENU_START = "FETCH_MENU_START";
export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_FAIL = "FETCH_MENU_FAIL";


export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.res})
    })
}


export const getRestaurants = () =>  dispatch => {
  dispatch({ type: FETCH_RESTAURANTS_START });
  axiosWithAuth()
      .get('/restaurants')
      .then(res => {
        console.log("res", res)
        dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: FETCH_RESTAURANTS_FAIL, payload: err.res })
      })
};


export const getMenuByRestId = () => dispatch => {
  dispatch({ type: FETCH_MENU_START });
  axiosWithAuth()
    // .get(`/menu/${id}`)
    .get("/menu")
    .then(res => {
      console.log("Menu res",res)
      dispatch({ type: FETCH_MENU_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_MENU_FAIL, payload: err.res})
    })
}
