import React from 'react';
import Link from 'next/link';

import Style from './HelpCenter.module.css';

const HelpCenter = () => {            // array bna li elements ki jo iske andar aani hain..
    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact Us",
            link: "contact-us"
        },
        {
            name: "Sign Up",
            link: "sign-up"
        },
        {
            name: "Sign In",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "subscription"
        }
    ];
    // map function se humne helpCenter ki array ko map kiya hai ..
    // i naam ka variable bhi diya hai jo index  hai.
    return (
        <div className={Style.box}>
            {helpCenter.map((el, i) => (
                <div key={i + 1} className={Style.helpCenter}>
                    <Link href={{ pathname: `${el.link}` }}> {el.name} </Link>
                </div>
            ))
            }
        </div >
    )
}

export default HelpCenter;