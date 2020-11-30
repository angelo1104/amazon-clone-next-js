import {actionTypes} from "./actions";

export const initialState = {
    user: null,
    dataUser: null,
    hits: [],
    showAutoComplete: false,
    searchText: ''
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
        case actionTypes.setHits:
            return {
                ...state,
                hits: action.hits,
            }
        case actionTypes.setShowAutoComplete:
            return {
                ...state,
                showAutoComplete: action.showAutoComplete
            }
        case actionTypes.setSearchText:
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return{...state}
    }
}

export default reducer;