import React, { useState } from 'react'

//internal imports
import Style from "./AuthorNFTCardBox.module.css"
import images from "../../img"
import { NFTCardTwo } from '@/collectionPage/collectionindex'
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard'

const AuthorNFTCardBox = ({ collectables, created, liked, followers, following }) => {
    const collectablesArray = [images.nft_image_1, images.nft_image_2, images.nft_image_3, images.nft_image_2, images.nft_image_3, images.nft_image_1, images.nft_image_3, images.nft_image_1]
    const createdArray = [images.nft_image_1, images.nft_image_2, images.nft_image_3, images.nft_image_2]
    const likedArray = [images.nft_image_1, images.nft_image_2, images.nft_image_3, images.nft_image_2, images.nft_image_1]
    const followersArray = [
        { background: images.creatorbackground1, user: images.user1 },
        { background: images.creatorbackground2, user: images.user2 },
        { background: images.creatorbackground3, user: images.user3 },
        { background: images.creatorbackground4, user: images.user4 },
        { background: images.creatorbackground5, user: images.user5 },
        { background: images.creatorbackground6, user: images.user6 }
    ]
    const followingArray = [
        { background: images.creatorbackground5, user: images.user5 },
        { background: images.creatorbackground6, user: images.user6 },
        { background: images.creatorbackground3, user: images.user3 },
        { background: images.creatorbackground1, user: images.user1 },
        { background: images.creatorbackground2, user: images.user2 },
        { background: images.creatorbackground4, user: images.user4 },

    ] 
    return (
        <div className={Style.AuthorNFTCardBox}>
            {collectables && <NFTCardTwo NFTData={collectablesArray} />}
            {created && <NFTCardTwo NFTData={createdArray} />}
            {liked && <NFTCardTwo NFTData={likedArray} />}
            {followers && (
                <div className={Style.AuthorNFTCardBox_box}>
                    {followersArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.AuthorNFTCardBox_box}>
                    {followingArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AuthorNFTCardBox