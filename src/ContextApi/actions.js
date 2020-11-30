const actionTypes = {
    setUser: 'SET_USER',
    setDataUser: 'SET_DATA_USER',
    setCanSell: 'SET_CAN_SELL',
    setHits: 'SET_HITS',
    setShowAutoComplete: 'SET_SHOW_AUTOCOMPLETE'
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

const setHits = (payload)=>{
    return{
        type: actionTypes.setHits,
        hits: payload
    }
}

const setShowAutoComplete = (payload)=>{
    return{
        type: actionTypes.setShowAutoComplete,
        showAutoComplete: payload,
    }
}

export {setUser, actionTypes, setDataUser, setCanSell, setHits, setShowAutoComplete}