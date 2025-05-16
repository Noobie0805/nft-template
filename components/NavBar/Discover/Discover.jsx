import React from 'react';
import Link from 'next/link';

//INETRNAL IMPORT

import Style from './Discover.module.css';

const Discover = () => {
    //DISCOVER NAVIGATION MENU...
    const discover = [    // array of elements that would be displayed in the discover menu...
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "search"
        },
        {
            name: "Aurthor Profile",
            link: "author-profile"
        },
        {
            name: "NFT Details",
            Link: "NFT-details"
        },
        {
            name: "Account Settings",
            Link: "account-settings"
        },
        {
            name: "Connect Wallet",
            Link: "connect-wallet"
        },
        {
            name: "Blog",
            Link: "blog"
        }
    ];

    return (
        // every element in array is mapped to a div element with a key... with a unique key...
        <div>
            {discover.map((el, i) => (
                <div key={i + 1} className={Style.discover}>
                    <Link href={{ pathname: `${el.link}` }}> {el.name} </Link>
                </div>
            ))
            }
        </div >
    )
}

export default Discover;