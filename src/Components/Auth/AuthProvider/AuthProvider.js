import React, {useEffect, useContext} from "react";
import {auth} from "../../../firebase";
import {useStateValue} from "../../../ContextApi/StateProvider";
import {setDataUser, setUser} from "../../../ContextApi/actions";
import Cookies from 'js-cookie'
import authInstance from "../../../axios/authInstance";

function AuthProvider({children}) {

    const [{user}, dispatch] = useStateValue();

    const AuthContext = useContext({
        user: null
    });


    useEffect(()=>{
        const unsubscribe = auth().onAuthStateChanged((authUser)=>{
            if (authUser){

                authInstance.post('/user',{
                    filter:{
                        email: authUser.email,
                        uid: authUser.uid,
                    }
                })
                    .then((response)=>{
                        dispatch(setDataUser(response.data))
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                dispatch(setUser(authUser))
            }else {
                dispatch(setUser(null))
                dispatch(setDataUser(null))
            }
        })


        return ()=>{
            unsubscribe()
        }
    },[])

    useEffect(()=>{
        console.log(user)
    },[])



    useEffect(()=>{
        auth().onIdTokenChanged(async (authUser)=>{
            if (authUser){
                const token = await authUser.getIdToken();
                Cookies.set('firebase', token);
            }else {
                Cookies.remove('firebase')
                console.log('No user id token')
            }
        })
    },[])

    return(
        <>
            {children}
        </>
    )
}

export default AuthProvider;