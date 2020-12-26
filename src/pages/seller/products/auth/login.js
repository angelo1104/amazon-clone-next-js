import React from 'react';
import SellerLogin from "../../../../Components/Seller/SellerAuth/SellerLogin/SellerLogin";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";

function SellerLoginPage() {
    return(
        <>
         <SellerLogin/>
        </>
    )
}

export default SellerLoginPage;

export async function getServerSideProps(ctx){

    const {firebase} = nookie.get(ctx);

    let user = null;

    if (firebase){
        user = await authInstance.post('/idToken',{
            idToken: firebase
        });

        return{
            props:{
                user: user?.data
            }
        }
    }

    return{
        props:{}
    }
}