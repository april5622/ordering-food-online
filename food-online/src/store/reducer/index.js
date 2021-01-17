import { 
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,
  FETCH_MENU_START,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAIL,
  FETCH_RESTAURANT_MENU_START,
  FETCH_RESTAURANT_MENU_SUCCESS,
  FETCH_RESTAURANT_MENU_FAIL

} from "../action/index";

const initialState = {
  restaurants: [],
  menu: [],
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

    case FETCH_MENU_START:
      return {
        ...state,
        isFetching: true,
        errors: "",
      };

    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        menu: action.payload
      };

    case FETCH_MENU_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.payload
      };

    case FETCH_RESTAURANT_MENU_START:
      return {
        ...state,
        isFetching: true,
        errors: "",
      };
    
    case FETCH_RESTAURANT_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        menu: action.payload
      };
    
    case FETCH_RESTAURANT_MENU_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.payload
      };
    

    default:
      return state;
  }
};
