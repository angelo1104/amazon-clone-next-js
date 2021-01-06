import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Header from "../Components/Header/Header";
import {useStateValue} from "../ContextApi/StateProvider";
import {setSearchText} from "../ContextApi/actions";
import SearchPage from "../Components/SearchPage/SearchPage";
import productInstance from "../axios/productInstance";
import Footer from "../Components/Footer/Footer";

function Search({data}) {
    const router = useRouter();
    const queryParam = router.query;
    const [{}, dispatch] = useStateValue();

    useEffect(()=>{
        console.log(data)
    },[])

    useEffect(()=>{
        if (queryParam.q) dispatch(setSearchText(queryParam.q))
    },[queryParam])

    return(
        <div>
            <Header/>

            <SearchPage/>

            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps({query}){
    try {
        const {data} = await productInstance.post('/paginate',{
            page:1,
            query: query?.q
        })
        return {
            props:{
                data
            }
        }
    }catch (error) {
        console.log(error)
        return {
            props:{}
        }
    }

    return{
        props:{}
    }
}