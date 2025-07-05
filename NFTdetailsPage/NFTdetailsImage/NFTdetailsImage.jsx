import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

//internal imports
import Style from "./NFTdetailsImage.module.css"
import images from '../../img'

const NFTdetailsImage = () => {
    const [description, setDescription] = useState(true)
    const [details, setDetails] = useState(true)
    const [like, setLike] = useState(false)

    const openDescription = () => {
        if (!description) {
            setDescription(true)
        }
        else {
            setDescription(false)
        }
    }
    const openDetails = () => {
        if (!details) {
            setDetails(true)
        }
        else {
            setDetails(false)
        }
    }
    const likeNFT = () => {
        if (!like) {
            setLike(true)
        }
        else {
            setLike(false)
        }
    }



    return (
        <div className={Style.NFTdetailsImage}>
            <div className={Style.NFTdetailsImage_box}>
                <div className={Style.NFTdetailsImage_box_NFT}>
                    <div className={Style.NFTdetailsImage_box_NFT_like}>
                        <BsImage className={Style.NFTdetailsImage_box_NFT_like_icon} />
                        <p onClick={() => likeNFT()}>
                            {like ? (
                                <AiOutlineHeart className={Style.NFTdetailsImage_box_NFT_like_icon} />
                            ) : (
                                <AiFillHeart className={Style.NFTdetailsImage_box_NFT_like_icon} />
                            )}
                            <span>23</span>
                        </p>
                    </div>
                    <div className={Style.NFTdetailsImage_box_NFT_img}>
                        <Image src={images.nft_image_1} className={Style.NFTdetailsImage_box_NFT_img_img} alt="NFT Image" width={700} height={670} objectFit="cover" />
                    </div>
                </div>
                <div className={Style.NFTdetailsImage_box_description} onClick={() => openDescription()}>
                    <p>Description</p>
                    {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                </div>
                {description && (
                    <div className={Style.NFTdetailsImage_box_description_box}>
                        <p>
                            Tattooed Kitty Gang ("TKG") is a collection of 666 badass kitty gangsters, with symbol of tattoos, living in the Proud
                            Kitty Gang ("PKG") metaverse. Each TKG is an 1/1 ID as gangster member & all the joint rights.
                        </p>
                    </div>
                )}
                <div className={Style.NFTdetailsImage_box_details} onClick={() => openDetails()}>
                    <p>Details</p>
                    {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                </div>
                {details && <div className={Style.NFTdetailsImage_box_details_box}>
                    <p>
                        <small>Size : </small>2000 x 2000 px IMAGE(685 KB)</p>
                    <p>
                        <small>Contract Address : </small>
                        0x50f5474724e0ee42d9a4e711ccfb275809fb275809fd6d4a
                    </p>
                    <p>
                        <small>Token Id : </small>
                        100300372864
                    </p>

                </div>}

            </div>
        </div >
    )
}

export default NFTdetailsImage