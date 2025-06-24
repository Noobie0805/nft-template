import React, { useState } from 'react'
import Image from 'next/image'
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb'



//internal imports
import Style from './AudioCardSmall.module.css'
import images from "../../../img"

const AudioCardSmall = () => {
    const [play, setPlay] = useState(false)

    const playMusic = () => {
        if (!play) {
            setPlay(true)
        } else {
            setPlay(false)
        }
    }

    return (
        <div className={Style.audioPlayer}>
            <div className={Style.audioPlayer_box}>
                <Image className={Style.audioPlayer_box_img} src={images.creatorbackground2} alt="music" height={80} width={80} />
                <div className={Style.audioPlayer_box_info}>
                    <h4>NFT Music #1142</h4>
                    <div className={Style.audioPlayer_box_info_box} >
                        {/* <LikeProfile /> */}
                        <div className={Style.audioPlayer_box_info_box_price}>
                            <small>Price</small>
                            <p>1.00 ETH</p>
                        </div>
                    </div>
                </div>
                <div className={Style.audioPlayer_box_playBtn} onClick={() => playMusic()}>
                    {play ? (<TbPlayerPause />) : (<TbPlayerPlay />)}
                </div>
            </div>
        </div>
    )
}

export default AudioCardSmall