import {actionTypes} from "./actions";

export const initialState = {
    user: null,
    dataUser: null,
    canSell: false,
}

const reducer = (state,action)=>{
    switch (action.type) {
        case actionTypes.setUser:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.setDataUser:
            return {
                ...state,
                dataUser: action.user
            }
        case actionTypes.setCanSell:
            return {
                ...state,
                canSell: action.canSell
            }
        default:
            return{...state}
    }
}

export default reducer;