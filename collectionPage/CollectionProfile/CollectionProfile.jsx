import React from 'react'
import Image from 'next/image'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti';


//internal import
import Style from "./CollectionProfile.module.css"
import images from "../../img"

const CollectionProfile = () => {
    const cardArray = [1, 2, 3, 4]
    return (
        <div className={Style.collectionProfile}>
            <div className={Style.collectionProfile_box}>
                <div className={Style.collectionProfile_box_left}>
                    <Image className={Style.collectionProfile_box_left_img} src={images.nft_image_1} width={280} height={280} alt="nft image" />
                    <div className={Style.collectionProfile_box_left_social}>
                        <a href="#"><TiSocialFacebook /></a>
                        <a href="#"><TiSocialLinkedin /></a>
                        <a href="#"><TiSocialTwitter /></a>
                        <a href="#"><TiSocialYoutube /></a>
                        <a href="#"><TiSocialInstagram /></a>
                    </div>
                </div>
                <div className={Style.collectionProfile_box_middle}>
                    <h1> Awesome NFTs collection</h1>
                    <p>Karafuru si home to 5,555 generative arts where colors reign supreme.
                        Leave the drab reality and enter the world of Karafuru by Museum of toys.
                    </p>
                    <div className={Style.collectionProfile_box_middle_box}>
                        {cardArray.map((el, i) => (
                            <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>
                                <small>Floor Price</small>
                                <p>${i + 1}95,4683</p>
                                <span> + {i + 2}.11%</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className={Style.collectionProfile_box_right}></div> */}
            </div>
        </div>
    )
}

export default CollectionProfile;