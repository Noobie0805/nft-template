import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md'

//internal import
import Style from "./DaysComponents.module.css";
import images from '../../../img';


const DaysComponents = ({ el, i }) => {
    return (
        <div className={Style.daysComponents}>
            <div className={Style.daysComponents_box}>
                <div className={Style.daysComponents_box_img}>
                    <Image src={el.bg_main} alt="profile background" className={Style.daysComponents_box_img_img} width={360} height={200} objectFit="covers" />
                </div>
                <div className={Style.daysComponents_box_profile}>
                    <Image src={el.bg1} alt="profile" width={120} height={100} className={Style.daysComponents_box_img_1} objectFit="covers" />
                    <Image src={el.bg2} alt="profile" width={120} height={100} className={Style.daysComponents_box_img_2} objectFit="covers" />
                    <Image src={el.bg3} alt="profile" width={120} height={100} className={Style.daysComponents_box_img_3} objectFit="covers" />
                </div>
                <div className={Style.daysComponents_box_title}>
                    <h2>Amazing Collections</h2>
                    <div className={Style.daysComponents_box_title_info}>
                        <div className={Style.daysComponents_box_title_info_profile}>
                            <Image src={el.user} alt="profile" width={30} height={30} objectFit="covers" className={Style.daysComponents_box_title_info_profile_img} />
                            <p><span>Barry Allen</span><small><MdVerified /></small></p>
                        </div>
                        <div className={Style.daysComponents_box_title_info_price}>
                            <small>1.255 ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponents;