import React from "react";
import DashBoardHome from "../../../../Components/Seller/DashBoard/DashBoardHome/DashBoardHome";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";

function DashBoardHomePage() {
    return(
        <div>
            <DashBoardHome/>
        </div>
    )
}

export default DashBoardHomePage


export async function getServerSideProps(ctx){

    const {firebase} = nookie.get(ctx);

    let user = null;

    if (firebase){
        user = await authInstance.post('/idtoken',{
            idToken: firebase
        });

        return{
            props:{
                user: user?.data
            }
        }
    }else {
        return{
            props:{
                user: user?.data
            },
            redirect:{
                permanent: false,
                destination: '/seller/products'
            }
        }
    }

    return{
        props:{}
    }
}