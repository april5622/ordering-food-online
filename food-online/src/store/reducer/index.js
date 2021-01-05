import { 
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,

} from "../action/index";

const initialState = {
  restaurants: [],
  isFetching: false,
  errors: "",
  loggedIn: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_START:
      return {
        ...state,
        loggedIn: true,
        error: "",
      };

    case LOGIN_SUCCESS: 
      return {
        ...state,
        loggedIn: false,
        error: "",
      };

    case LOGIN_FAIL:
      return{
        ...state,
        loggedIn: false,
        isFetching: false,
        error: action.payload

      };

    case FETCH_RESTAURANTS_START:
      return {
        ...state,
        isFetching: true,
        errors: "",
      };

    case FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        restaurants: action.payload
      };

    case FETCH_RESTAURANTS_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.payload
      };

    default:
      return state;
  }
};
