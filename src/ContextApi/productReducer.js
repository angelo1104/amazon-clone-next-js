export const productInitialState = {
    village: 'Mauli'
}

const productReducer = (state, action)=>{
    switch (action.type) {
        case 'SET_VILLAGE':
            return{
                ...state,
                village: action.village
            }
    }
}

export default productReducer