import React from "react";
import {useStateValue} from "../../../../ContextApi/StateProvider";
import BecomeSellerLogin
    from "../../../../Components/Seller/SellerAuth/BecomeSeller/BecomeSellerLogin/BecomeSellerLogin";

function BecomeLoginSellerPage() {

    const [{user,dataUser, canSell}, dispatch] = useStateValue()

    let widget = <div>Nothing here</div>;

    if (dataUser && !canSell){
        widget = <div>I will make u a guy</div>
    }else if (!dataUser){
        widget = <div>Go to login</div>
    }else if (canSell){
        widget =  <div>Sorry you are a guy</div>
    }

    return(
        <div>
            <BecomeSellerLogin/>
        </div>
    )
}

export default BecomeLoginSellerPage