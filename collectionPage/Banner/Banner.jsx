import React from 'react';
import Image from "next/image"

//internal imports
import Style from "./Banner.module.css"
import images from "../../img"

const Banner = ({ bannerImage }) => {
    return (
        <div className={Style.banner}>
            <div className={Style.banner_img}>
                <Image src={bannerImage} objectFit='cover' alt="background" width="1520" height="300" />
            </div>
            <div className={Style.banner_img_mobile}>
                <Image src={bannerImage} objectFit='cover' alt="background" width="1520" height="900" />
            </div>
        </div>
    )
}

export default Banner