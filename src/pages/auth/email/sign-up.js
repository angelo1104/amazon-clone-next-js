import React from "react";
import SignUp from "../../../Components/Auth/SignUp/SignUp";
import nookie from 'nookies'

function SignUpPage({email}) {
    return(
        <div className="sign-up">
            <SignUp/>
        </div>
    )
}

export default SignUpPage;

export async function getServerSideProps(ctx){

    const {firebase} = nookie.get(ctx);


    return{
        props:{
            email:'hello@bello.com'
        }
    }
}