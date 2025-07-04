import React, { useState } from 'react'
import Image from 'next/image'
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md'
import { FiCopy } from 'react-icons/fi'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

//internal imports 
import Style from "./AuthorProfileCard.module.css"
import images from "../../img"
import { Button } from "../../components/componentsindex"

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false)
    const [report, setReport] = useState(false)

    const copyAddress = () => {
        const copytxt = document.getElementById('myInput');

        copytxt.select();
        navigator.clipboard.writeText(copytxt.value);
    }
    const openShare = () => {
        if (!share) {
            setShare(true)
            setReport(false)
        }
        else {
            setShare(false)
        }
    }
    const openReport = () => {
        if (!report) {
            setReport(true)
            setShare(false)
        }
        else {
            setReport(false)
        }
    }


    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <Image src={images.nft_image_1} className={Style.AuthorProfileCard_box_img_img} alt="NFT Images" width={220} height={220} />
                </div>
                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>
                        Dony Herrara{" "}
                        <span><MdVerified /></span>
                    </h2>
                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input type='text' value='0x829BD824B03D090093333..A830' id='myInput' />
                        <FiCopy onClick={() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon} />
                    </div>
                    <p>
                        Punk #4876 / An OG Cryptopunk Collector , hoarder of NFTs.
                        Contributing to @ether_cards, an NFT Monetization Platfrom.
                    </p>
                    <div className={Style.AuthorProfileCard_box_info_social}>
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
                <div className={Style.AuthorProfileCard_box_share}>
                    <Button btnName="Follow" onClick={() => { }} />
                    <MdCloudUpload onClick={() => openShare()} className={Style.AuthorProfileCard_box_share_icon} />

                    {share && (
                        <div className={Style.AuthorProfileCard_box_share_upload}>
                            <p><span><TiSocialFacebook /></span>{" "}Facebook</p>
                            <p><span><TiSocialLinkedin /></span>{" "}Linkedin</p>
                            <p><span><TiSocialTwitter /></span>{" "}Twitter</p>
                            <p><span><TiSocialYoutube /></span>{" "}Youtube</p>
                            <p><span><TiSocialInstagram /></span>{" "}Instagram</p>
                        </div>
                    )}
                    <BsThreeDots onClick={() => openReport()} className={Style.AuthorProfileCard_box_share_icon} />

                    {report && (
                        <div className={Style.AuthorProfileCard_box_share_report}>
                            <p><span><MdOutlineReportProblem /></span>{" "}
                                Report Abuse
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default AuthorProfileCard