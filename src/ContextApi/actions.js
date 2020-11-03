const actionTypes = {
    setUser: 'SET_USER',
}

const setUser = (payload)=>{
    return {
        type: actionTypes.setUser,
        user: payload
    }
}

export {setUser, actionTypes}