import {actionTypes} from "./actions";

export const initialState = {
    user: null,
}

const reducer = (state,action)=>{
    switch (action.type) {
        case actionTypes.setUser:
            return {
                ...state,
                user: action.user
            }
        default:
            return{...state}
    }
}

export default reducer;