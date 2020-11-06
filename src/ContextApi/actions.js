const actionTypes = {
    setUser: 'SET_USER',
    setDataUser: 'SET_DATA_USER'
}

const setUser = (payload)=>{
    return {
        type: actionTypes.setUser,
        user: payload
    }
}

const setDataUser = (payload)=>{
    return{
        type: actionTypes.setDataUser,
        user: payload,
    }
}

export {setUser, actionTypes, setDataUser}