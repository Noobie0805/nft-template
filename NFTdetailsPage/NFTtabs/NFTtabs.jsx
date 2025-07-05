import React from 'react'
import Image from 'next/image'

//internal imports
import Style from "./NFTtabs.module.css"
import images from "../../img"


const NFTtabs = ({ dataTab, icon }) => {
    return (
        <div className={Style.NFTtabs}>
            {dataTab.map((el, i) => (
                <div className={Style.NFTtabs_box} key={i + 1}>
                    <Image className={Style.NFTtabs_box_img} src={el} alt="profile image" width={35} height={35} />
                    <div className={Style.NFTtabs_box_info}>
                        <span>Offer by $770 by <span className={Style.NFTtabs_box_info_name}>Tung Tung Sahur {icon}</span></span>
                        <small>June 14 - 4:12 PM</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTtabs