import React from 'react'
import Image from 'next/image'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri'
//Internal imports
import Style from './Footer.module.css'
import images from '../../img'
import { Discover, HelpCenter } from '../NavBar/index'


const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                <div className={Style.footer_box_social}>
                    <Image src={images.logo} alt="footer logo" height={100} wqidth={100} />
                    <p>An NFT Marketplace for the most outstanding articles on all the topics of NFT & your own stories...</p>
                    <div className={Style.footer_social}>
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
                <div className={Style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover />
                </div>
                <div className={Style.footer_box_discover}>
                    <h3>Help Center</h3>
                    <HelpCenter />
                </div>

                <div className={Style.subscribe}>
                    <h3>Subscribe</h3>
                    {/* <p>Join our newsletter to stay updated with the latest news and offers!</p> */}
                    <div className={Style.subscribe_box}>
                        <input type="email" placeholder='Enter your email address' />
                        <RiSendPlaneFill className={Style.subscribe_box_send} />   {/* for send icon */}
                    </div>
                    <div className={Style.subscribe_box_info}>
                        <p>
                            Discover, collect, and sell extraordinary NFTs on our marketplace.... <br />
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer