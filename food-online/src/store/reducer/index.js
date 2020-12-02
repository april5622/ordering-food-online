import { FETCH_RESTAURANTS_START } from "../action/index";

const initialState = {
    restaurants: [],
    isFetching: false,
    errors: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_RESTAURANTS_START:
            return{
                ...state,
                isFetching: true,
                errors: ""
            };

            
        default:
            return state;
    }

};