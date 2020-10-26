import React, {useState} from 'react';
import styles from './Header.module.css';
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderItems from "../HeaderItems/HeaderItems";
import Link from "next/link";
import {Menu} from "@material-ui/icons";
import {SwipeableDrawer} from "@material-ui/core";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const openDrawer = (e)=>{
        setDrawerOpen(!drawerOpen)
    }

    const closeDrawer = (e)=>{
        setDrawerOpen(false)
    }

    return(
        <header className={styles.header}>

            <div className={styles.header_logo}>
                <Menu className={styles.header_logo_menu} onClick={openDrawer}/>

                <Link href={'/'}>
                    <img className={styles.header_img_logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>

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

            <HeaderItems/>
        </header>
    )
}

export default Header;