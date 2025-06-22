import React from 'react'

//internal import...
import Style from "./AudioLive.module.css"

const AudioLive = () => {
    return (
        <div className={Style.audioLive}>
            <div className={Style.audioLive_box}>
                <div className={Style.audioLive_box_left}>left</div>
                <div className={Style.audioLive_box_right}>right</div>
            </div>
        </div>
    )
}

export default AudioLive;