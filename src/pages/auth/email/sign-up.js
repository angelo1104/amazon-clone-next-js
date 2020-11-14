import React, {useEffect} from "react";
import SignUp from "../../../Components/Auth/SignUp/SignUp";
import nookie from 'nookies'
import authInstance from "../../../axios/authInstance";

function SignUpPage({user}) {

    useEffect(()=>{
        if (user){
            console.log('This is cookie user --->>>', user)
        }else {
            console.log('Out of cookies...')
        }
    },[])

    return(
        <div className="sign-up">
            <SignUp/>
        </div>
    )
}

export default SignUpPage;

export async function getServerSideProps(ctx){

    const {firebase} = nookie.get(ctx);

    let user = null;

    if (firebase){
        user = await authInstance.post('/idtoken',{
            idToken: firebase
        });

        return{
            redirect:{
              permanent: false,
              destination: '/'
            },
            props:{
                user: user?.data
            }
        }
    }

    return{
        props:{}
    }
}