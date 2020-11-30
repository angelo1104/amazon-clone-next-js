import React, {useState} from 'react';
import styles from './Header.module.css';
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderItems from "../HeaderItems/HeaderItems";
import Link from "next/link";
import {Menu} from "@material-ui/icons";
import {SwipeableDrawer} from "@material-ui/core";
import ResponsiveHeaderItem from "../ResponsiveHeaderItem/ResponsiveHeaderItem";
import SubHeader from "../SubHeader/SubHeader";
import HeaderNavigationMobile from "./HeaderNavigationMobile/HeaderNavigationMobile";
import {useStateValue} from "../../ContextApi/StateProvider";
import {setShowAutoComplete} from "../../ContextApi/actions";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const [{showAutoComplete}, dispatch] = useStateValue();

    const openDrawer = (e)=>{
        setDrawerOpen(!drawerOpen)
    }

    const closeDrawer = (e)=>{
        setDrawerOpen(false)
    }

    const hideAutoComplete = (event) => {
        dispatch(setShowAutoComplete(false))
    }

    return(
        <header className={styles.header} onClick={hideAutoComplete}>

            <div className={styles.header_main}>
                <div className={styles.header_logo}>
                    <div className={styles.header_logo_left}>
                        <Menu className={styles.header_logo_menu} onClick={openDrawer}/>

                        <Link href={'/'}>
                            <img className={styles.header_img_logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                        </Link>
                    </div>

                    <ResponsiveHeaderItem/>

                    <SwipeableDrawer
                        anchor={'left'}
                        onClose={closeDrawer}
                        onOpen={openDrawer}
                        open={drawerOpen}>

                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </SwipeableDrawer>
                </div>

                <HeaderSearch/>

                <HeaderNavigationMobile/>

                <HeaderItems/>

            </div>

            <SubHeader/>
        </header>
    )
}

export default Header;