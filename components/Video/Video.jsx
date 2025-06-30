import React from 'react'
import Image from 'next/image'

//internal imports
import Style from './Video.module.css'
import images from '../../img'


const Video = () => {
    return (
        <div className={Style.Video}>
            <div className={Style.Video_box}>
                <h1><span>XD</span> The Videos</h1>
                <p>Check out our latest videos. View more and share more new perpectives
                    about any topic. Everyone's welcomed !
                </p>
                <div className={Style.Video_box_frame}>
                    <div className={Style.Video_box_frame_left}>
                        <Image className={Style.Video_box_frame_left_img} src={images.hero} alt="video image" height={1080} width={1920} objectFit=" cover" />
                    </div>
                    <div className={Style.Video_box_frame_right}>
                        Hey..
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;