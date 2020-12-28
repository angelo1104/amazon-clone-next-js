const productActionTypes = {
    setVillage: 'SET_VILLAGE'
}

const setVillage = (payload)=> ({
    type: productActionTypes.setVillage,
    village: payload
})

export {productActionTypes, setVillage}

