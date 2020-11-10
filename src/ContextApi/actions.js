const actionTypes = {
    setUser: 'SET_USER',
    setDataUser: 'SET_DATA_USER',
    setCanSell: 'SET_CAN_SELL',
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

const setCanSell = (payload)=>{
    return{
        type: actionTypes.setCanSell,
        canSell: payload
    }
}

export {setUser, actionTypes, setDataUser, setCanSell}