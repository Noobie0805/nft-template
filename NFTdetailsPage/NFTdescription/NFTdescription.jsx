import React, { useState } from 'react'
import Image from 'next/image'
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { FaWallet, FaPercentage } from 'react-icons/fa'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import { BiTransferAlt, BiDollar } from "react-icons/bi"

//intenal imports
import Style from "./NFTdescription.module.css"
import images from "../../img"
import { Button } from "../../components/componentsindex"
import { NFTtabs } from '../NFTdetailsIndex'

const NFTdescription = () => {

    const [social, setsocial] = useState(false)
    const [NFTmenu, setNFTmenu] = useState(false)
    const [history, sethistory] = useState(true)
    const [provenance, setprovenance] = useState(false)
    const [owner, setowner] = useState(false)

    const historyArray = [images.user1, images.user2, images.user3, images.user6, images.user8]
    const provenenceArray = [images.user4, images.user5, images.user6]
    const ownerArray = [images.user2, images.user4]

    const openSocial = () => {
        if (!social) {
            setsocial(true)
            setNFTmenu(false)
        }
        else {
            setsocial(false)
        }
    }
    const openNFTMenu = () => {
        if (!NFTmenu) {
            setsocial(false)
            setNFTmenu(true)
        }
        else {
            setNFTmenu(false)
        }
    }
    const openTabs = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Bid History") {
            if (!history) {
                sethistory(true)
                setprovenance(false)
                setowner(false)
            }
            // else {
            //     sethistory(false)
            // }
        }
        else if (btnText == "Provenance") {
            if (!provenance) {
                sethistory(false)
                setprovenance(true)
                setowner(false)
            }
            // else {
            //     setprovenance(false)
            //     sethistory(true)
            // }
        }
        else if (btnText == "Owner") {
            if (!owner) {
                sethistory(false)
                setprovenance(false)
                setowner(true)
            }
            // else {
            //     setowner(false)
            //     sethistory(true)
            // }
        }
    }

    return (
        <div className={Style.NFTdescription}>
            <div className={Style.NFTdescription_box}>
                {/* part one */}
                <div className={Style.NFTdescription_box_share}>
                    <p>Virtual Worlds</p>
                    <div className={Style.NFTdescription_box_share_box}>
                        <MdCloudUpload className={Style.NFTdescription_box_share_box_icon} onClick={() => openSocial()} />
                        {social && (
                            <div className={Style.NFTdescription_box_share_box_social}>
                                <a href="#"> <TiSocialFacebook /> Facebook </a>
                                <a href="#"> <TiSocialLinkedin /> LinkedIn</a>
                                <a href="#"> <TiSocialTwitter /> Twitter</a>
                                <a href="#"> <TiSocialYoutube /> Youtube</a>
                                <a href="#"> <TiSocialInstagram /> Instagram</a>
                            </div>
                        )}
                        <BsThreeDots className={Style.NFTdescription_box_share_box_icon} onClick={() => openNFTMenu()} />
                        {NFTmenu && (
                            <div className={Style.NFTdescription_box_share_box_social}>
                                <a href="#"> <BiDollar /> Change Price</a>
                                <a href="#"> <BiTransferAlt /> Transfer</a>
                                <a href="#"> <MdReportProblem /> Report Abuse</a>
                                <a href="#"> <MdOutlineDeleteSweep /> Delete Item</a>
                            </div>
                        )}
                    </div>
                </div>
                {/* part two */}
                <div className={Style.NFTdescription_box_profile}>
                    <h1>Banner #23453</h1>
                    <div className={Style.NFTdescription_box_profile_box}>
                        <div className={Style.NFTdescription_box_profile_box_left}>
                            <Image className={Style.NFTdescription_box_profile_box_left_img} src={images.user3} alt="Profile" width={40} height={40} />
                            <div className={Style.NFTdescription_box_profile_box_left_info}>
                                <small>Creator</small>
                                <span>Karli Costa <span><MdVerified /></span></span>
                            </div>
                        </div>
                        <div className={Style.NFTdescription_box_profile_box_right}>
                            <Image className={Style.NFTdescription_box_profile_box_left_img} src={images.user4} alt="Profile" width={40} height={40} />
                            <div className={Style.NFTdescription_box_profile_box_right_info}>
                                <small>Creator</small>
                                <span>Jane Costa <span><MdVerified /></span></span>
                            </div>
                        </div>
                    </div>

                    <div className={Style.NFTdescription_box_profile_bidding} >
                        <p>
                            <MdTimer /> <span>Auction ending in:</span>
                        </p>
                        <div className={Style.NFTdescription_box_profile_bidding_box_timer}>
                            <div className={Style.NFTdescription_box_profile_bidding_box_timer_item}>
                                <p>22</p>
                                <span>Days</span>
                            </div>
                            <div className={Style.NFTdescription_box_profile_bidding_box_timer_item}>
                                <p>13</p>
                                <span>Hours</span>
                            </div>
                            <div className={Style.NFTdescription_box_profile_bidding_box_timer_item}>
                                <p>45</p>
                                <span>Mins</span>
                            </div>
                            <div className={Style.NFTdescription_box_profile_bidding_box_timer_item}>
                                <p>53</p>
                                <span>Secs</span>
                            </div>
                        </div>
                        <div className={Style.NFTdescription_box_profile_bidding_box_price}>
                            <div className={Style.NFTdescription_box_profile_bidding_box_price_bid}>
                                <small>Current Bid</small>
                                <p>
                                    1.030 ETH
                                    <span>( $3,221.22 )</span>
                                </p>
                            </div>
                            {/* <span className={Style.NFTdescription_box_profile_bidding_box_price_inStock}>[96 in stock]</span> */}
                        </div>
                        <div className={Style.NFTdescription_box_profile_bidding_box_button}>
                            <Button icon={<FaWallet />} btnName="Place a bid" handleClick={() => { }} classStyle={Style.button} />
                            <Button icon={<FaPercentage />} btnName="Make an offer" handleClick={() => { }} classStyle={Style.button} />
                        </div>
                        <div className={Style.NFTdescription_box_profile_bidding_box_tabs}>
                            <button onClick={(e) => openTabs(e)}>Bid History</button>
                            <button onClick={(e) => openTabs(e)}>Provenance</button>
                            <button onClick={(e) => openTabs(e)}>Owner</button>
                        </div>
                        {history && (
                            <div className={Style.NFTdescription_box_profile_bidding_box_card}>
                                <NFTtabs dataTab={historyArray} icon={<MdVerified />} />
                            </div>
                        )}
                        {provenance && (
                            <div className={Style.NFTdescription_box_profile_bidding_box_card}>
                                <NFTtabs dataTab={provenenceArray} icon={<MdVerified />} />
                            </div>
                        )}
                        {owner && (
                            <div className={Style.NFTdescription_box_profile_bidding_box_card}>
                                <NFTtabs dataTab={ownerArray} icon={<MdVerified />} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTdescription