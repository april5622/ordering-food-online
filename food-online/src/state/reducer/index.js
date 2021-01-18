import { combineReducers } from 'redux';
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
  FETCH_RESTAURANT_MENU_FAIL,
  ADD_CART,
  DELETE_CART,
  GET_QUANTITY,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY


} from "../action/index";

const initialState = {
  restaurants: [],
  menu: [],
  isFetching: false,
  errors: "",
  loggedIn: false,
  carts: [],
  cartItem: 0,
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

    case ADD_CART:
      if(state.cartItem==0){
        let cart = {
          id:action.payload.id,
          quantity:1,
          name:action.payload.name,
          photo:action.payload.photo,
          price:action.payload.price
        } 
          state.carts.push(cart); 
        }
      else{
        let check = false;
        state.carts.map((item,key)=>{
          if(item.id==action.payload.id){
              state.carts[key].quantity++;
              check=true;
            }
          });
          if(!check){
            let _cart = {
                id:action.payload.id,
                quantity:1,
                name:action.payload.name,
                photo:action.payload.photo,
                price:action.payload.price
            }
            state.carts.push(_cart);
          }
        }
      return{
          ...state,
          cartItem:state.cartItem+1
      };

    case DELETE_CART:
      let quantity_ = state.carts[action.payload].quantity;
      return{
        ...state,
        cartItem: state.cartItem - quantity_,
        carts: state.carts.filter(item => {
          return item.id != state.carts[action.payload].id
        })
      };

    case GET_QUANTITY:
      return {
        ...state
      };

    case INCREASE_QUANTITY:
      state.cartItem++
      state.carts[action.payload].quantity++;
      return {
        ...state
      };

    case DECREASE_QUANTITY:
      let quantity = state.carts[action.payload].quantity;
      if(quantity > 1){
        state.cartItem--;
        state.carts[action.payload].quantity--;
      }
      return {
        ...state
      };
    
    

    default:
      return state;
  }
};

const ShopCart = combineReducers({
    _reducer: reducer
});
export default ShopCart;
