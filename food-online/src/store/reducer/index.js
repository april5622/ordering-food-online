import { 
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_RESTAURANTS_START, 
  LOGIN_SUCCESS,
  LOGIN_FAIL

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
        loggedIn: false,
        error: "",
      };

    case LOGIN_SUCCESS: 
      return {
        ...state,
        loggedIn: true,
        error: "",
      };

    case LOGIN_FAIL:
      return{
        ...state,
        loggedIn: false,
        error: action.payload

      }

    case FETCH_RESTAURANTS_START:
      return {
        ...state,
        isFetching: true,
        errors: "",
      };

    default:
      return state;
  }
};
