import {actionTypes} from "./actions";

export const initialState = {
    user: null,
    token:'',
}

const reducer = (state,action)=>{
    switch (action.type) {
        case actionTypes.setUser:
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return{...state}
    }
}

export default reducer;