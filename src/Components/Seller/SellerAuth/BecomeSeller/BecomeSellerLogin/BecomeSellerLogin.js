import React, {createContext, useContext} from "react";
import styles from './BecomeSellerLogin.module.css'
import BecomeSellerForm from "../BecomeSellerForm/BecomeSellerForm";

function BecomeSellerLogin({isUser}) {
    return(
        <div>
            <BecomeSellerForm isUser={isUser} />
        </div>
    )
}

export default BecomeSellerLogin