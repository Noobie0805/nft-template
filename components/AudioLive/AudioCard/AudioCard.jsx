import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb'

//internal import...
import Style from "./AudioCard.module.css"
import images from "../../../img"

const AudioCard = () => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);
    return (
        <div className={Style.audioCard}>
            <div className={Style.audioCard_box}>
                <div className={Style.audioCard_box_like_time}>
                    <div className={Style.audioCard_box_like} onClick={() => likeNft()}>
                        {like ? (<AiFillHeart className={Style.audioCard_box_like_icon} />) : (<AiOutlineHeart className={Style.audioCard_box_like_icon} />)}
                        <span>24</span>
                    </div>
                    <div className={Style.audioCard_box_like}></div>
                </div>
            </div>
        </div>
    )
}

export default AudioCard;