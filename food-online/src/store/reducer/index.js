import { 
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_RESTAURANTS_START, 
  LOGIN_SUCCESS

} from "../action/index";

const initialState = {
  restaurants: [],
  isFetching: false,
  errors: "",
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
