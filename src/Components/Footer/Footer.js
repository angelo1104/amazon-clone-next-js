import React from "react";
import styles from './Footer.module.css';
import FooterColumn from "./FooterColumn/FooterColumn";
import {Button} from "@material-ui/core";

function Footer() {
    const linkData = [
        {
            title: 'Get to know us',
            links: [
                {
                    name: 'Careers',
                    url: '#'
                },
                {
                    name: 'Blog',
                    url: '#'
                },
                {
                    name: 'About Amazon',
                    url: '#'
                },
                {
                    name: 'Investor Relations',
                    url: '#'
                },
                {
                    name: 'Amazon Devices',
                    url: '#'
                },
                {
                    name: 'Amazon Tours',
                    url: '#'
                },
            ]
        },
        {
            title: 'Make money with us',
            links: [
                {
                    name: 'Sell products on Amazon',
                    url: '#'
                },
                {
                    name: 'Sell apps on Amazon',
                    url: '#'
                },
                {
                    name: 'Become an affiliate',
                    url: '#'
                },
                {
                    name: 'Advertise your products',
                    url: '#'
                },
                {
                    name: 'Self publish with us',
                    url: '#'
                },
                {
                    name: 'Host an Amazon hub',
                    url: '#'
                },
            ]
        },
        {
            title: 'Amazon payment products',
            links: [
                {
                    name: 'Amazon business cards',
                    url: '#'
                },
                {
                    name: 'Shop with points',
                    url: '#'
                },
                {
                    name: 'Reload your balance',
                    url: '#'
                },
                {
                    name: 'Amazon currency converter',
                    url: '#'
                },
            ]
        },
        {
            title: 'Let us help you',
            links: [
                {
                    name: 'Amazon and COVID-19',
                    url: '#'
                },
                {
                    name: 'Your Account',
                    url: '#'
                },
                {
                    name: 'Your Orders',
                    url: '#'
                },
                {
                    name: 'Shipping Rates and policies',
                    url: '#'
                },
                {
                    name: 'Returns and Replacements',
                    url: '#'
                },
                {
                    name: 'Manage your content and devices',
                    url: '#'
                },
                {
                    name: 'Amazon assistant',
                    url: '#'
                },
                {
                    name: 'Help',
                    url: '#'
                },
            ]
        },
    ]


    const scrollToTop = (event)=>{
        window.scrollTo(0,0)
    }

    return(
        <footer className={styles.footer}>

            <Button onClick={scrollToTop} className={styles.back_to_top}>Back To Top</Button>
            <div className={styles.footer_links}>
                {
                    linkData.map((link,index)=>{
                        return <FooterColumn key={index} data={link}/>
                    })
                }
            </div>
        </footer>
    )
}

export default Footer;