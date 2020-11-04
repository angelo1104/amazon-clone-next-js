import React, {useEffect} from "react";
import {auth} from "../../../firebase";
import {useStateValue} from "../../../ContextApi/StateProvider";
import {setUser} from "../../../ContextApi/actions";

function AuthProvider({children}) {
    const [{user}, dispatch] = useStateValue();


    useEffect(()=>{
        const unsubscribe = auth().onAuthStateChanged((authUser)=>{
            if (authUser){
                console.log(authUser)
                dispatch(setUser(authUser))
            }else {
                dispatch(setUser(null))
            }
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    useEffect(()=>{
        console.log(user)
    },[])


    return(
        <>
            {children}
        </>
    )
}

export default AuthProvider;