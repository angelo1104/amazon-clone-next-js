import {productActionTypes} from "./productsActions";

export const productInitialState = {
    village: 'Mauli'
}

const productReducer = (state, action)=>{
    switch (action.type) {
        case productActionTypes.setVillage:
            return{
                ...state,
                village: action.village
            }
    }
}

export default productReducer