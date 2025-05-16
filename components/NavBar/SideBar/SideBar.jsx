import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

// internal imports ..
import Style from './SideBar.module.css';
import images from '../../../img';
import Button from '../../Button/Button';

const SideBar = ({ setOpenSideMenu }) => {  // props parameter passed from the parent component to open and close the sidebar .. thus will allow us to open and close the sidebar from the parent component as well..
    //USESTATE 
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);


    //for discover menu...
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
            name: "Account Setting",
            Link: "account-setting"
        },
        {
            name: "Connect Wallet",
            Link: "connect-wallet"
        },
        {
            name: "Blog",
            link: "blog"
        }
    ];
    //from help center menu...
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

    // functions required below...
    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setOpenDiscover(true);
        }
        else {
            setOpenDiscover(false);
        }
    }

    const openHelpMenu = () => {
        if (!openHelp) {
            setOpenHelp(true);
        }
        else {
            setOpenHelp(false);
        }
    }

    const closeSideBar = () => {
        setOpenSideMenu(false);  // close the sidebar when the close button is clicked .. prop is used herw..
    }


    return (
        <div className={Style.sideBar}>
            <GrClose className={Style.sideBar_closeBtn} onClick={() => closeSideBar()} /> {/* close button */}
            <div className={Style.sideBar_box}>
                <Image src={images.logo} alt="logo" height={150} width={150} />
                <p>Discover the most outstanding articles on all the topics of NFT & your own stories and share them </p>
                <div className={Style.sideBar_social}>
                    <a href='#' alt="facebook">
                        <TiSocialFacebook />
                    </a>
                    <a href='#' alt="Linkedin">
                        <TiSocialLinkedin />
                    </a>
                    <a href='#' alt="Twitter">
                        <TiSocialTwitter />
                    </a>
                    <a href='#' alt="Youtube">
                        <TiSocialYoutube />
                    </a>
                    <a href='#' alt="Instagram">
                        <TiSocialInstagram />
                    </a>
                </div>
            </div>
            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>

                    {openDiscover && (
                        <div className={Style.sideBar_discover}>
                            {discover.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
                        <p>Help Center</p>
                        <TiArrowSortedDown />
                    </div>

                    {openHelp && (
                        <div className={Style.sideBar_discover}>
                            {helpCenter.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/*     BUTTONS FOR SIDEBAR */}
            <div className={Style.sideBar_button}>
                <Button btnName="Create" handleClick={() => { }} />
                <Button btnName="Connect Wallet" handleClick={() => { }} />
            </div>
        </div >
    )
}

export default SideBar;