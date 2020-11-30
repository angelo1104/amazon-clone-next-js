import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Header from "../Components/Header/Header";
import {useStateValue} from "../ContextApi/StateProvider";
import {setSearchText} from "../ContextApi/actions";

function SearchPage() {
    const router = useRouter();
    const queryParam = router.query;
    const [{}, dispatch] = useStateValue();

    useEffect(()=>{
        if (queryParam.q) dispatch(setSearchText(queryParam.q))
    },[queryParam])

    return(
        <div>
            <Header/>

            <p className={'testProductsPlaceholder'}>
                I will configure products for later for the query {queryParam?.q}
            </p>
        </div>
    )
}

export default SearchPage;