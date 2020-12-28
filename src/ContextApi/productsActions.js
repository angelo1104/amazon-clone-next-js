const productActionTypes = {
    setVillage: 'SET_VILLAGE',
    setPage: 'SET_PAGE',
}

const setVillage = (payload)=> ({
    type: productActionTypes.setVillage,
    village: payload
})

const setFormPage = (payload)=>({
    type: productActionTypes.setPage,
    page: payload
})

export {productActionTypes, setVillage, setFormPage}

