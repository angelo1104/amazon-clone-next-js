import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Header from "../Components/Header/Header";
import {useStateValue} from "../ContextApi/StateProvider";
import {setSearchText} from "../ContextApi/actions";
import SearchPage from "../Components/SearchPage/SearchPage";

function Search() {
    const router = useRouter();
    const queryParam = router.query;
    const [{}, dispatch] = useStateValue();

    useEffect(()=>{
        if (queryParam.q) dispatch(setSearchText(queryParam.q))
    },[queryParam])

    return(
        <div>
            <Header/>

            <SearchPage/>
        </div>
    )
}

export default Search;