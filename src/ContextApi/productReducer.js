import {productActionTypes} from "./productsActions";

export const productInitialState = {
    village: 'Mauli',
    page: 0,
}

const productReducer = (state, action)=>{
    switch (action.type) {
        case productActionTypes.setVillage:
            return{
                ...state,
                village: action.village
            }
        case productActionTypes.setPage:
            return {
                ...state,
                page: action.page
            }
        default:
            return {
                ...state
            }
    }
}

export default productReducer