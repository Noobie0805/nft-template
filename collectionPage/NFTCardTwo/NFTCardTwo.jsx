import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdVerified, MdTimer } from 'react-icons/md'

//internal imports
import images from "../../img"
import Style from "./NFTCardTwo.module.css"
import { LikeProfile } from '../../components/componentsindex'

const NFTCardTwo = ({ NFTData }) => {
    const [like, setLike] = useState(false)
    const [likeInc, setLikeInc] = useState(21)
    const likeNFT = () => {
        if (!like) {
            setLike(true)
            setLikeInc(21)
        }
        else {
            setLike(false)
            setLikeInc(21 + 1)
        }
    }
    return (
        <div className={Style.NFTCardTwo}>
            {NFTData.map((el, i) => (
                <div className={Style.NFTCardTwo_box} key={i + 1}>
                    <div className={Style.NFTCardTwo_box_like}>
                        <div className={Style.NFTCardTwo_box_like_box}>
                            <div className={Style.NFTCardTwo_box_like_box_box}>
                                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                                <p onClick={() => likeNFT()}>
                                    {like ? <AiOutlineHeart /> : <AiFillHeart />}{""}
                                    <span>{likeInc + 1}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCardTwo_box_img}>
                        <Image className={Style.NFTCardTwo_box_img_img} src={el} alt="NFT" width={280} height={260} objectFit='cover' />
                    </div>
                    <div className={Style.NFTCardTwo_box_info}>
                        <div className={Style.NFTCardTwo_box_info_left}>
                            <div className={Style.NFTCardTwo_box_info_left_likes}><LikeProfile /></div>
                            <p>Clone #{i + 1}</p>
                        </div>
                        <small>4{i + 2}</small>
                    </div>
                    <div className={Style.NFTCardTwo_box_price}>
                        <div className={Style.NFTCardTwo_box_price_box}>
                            <small>Current Bid</small>
                            <p>$ {i + 5}3,235</p>
                        </div>
                        <p className={Style.NFTCardTwo_box_price_stock}>
                            <MdTimer /><span>{i + 1} hours left </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTCardTwo;