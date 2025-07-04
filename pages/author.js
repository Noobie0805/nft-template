import React, { useState, useEffect } from 'react'
import Image from 'next/image'

//internal imports
import Style from "../styles/author.module.css"
import { Banner } from "../collectionPage/collectionindex"
import { Brand, Title } from "../components/componentsindex"
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard'
import { AuthorProfileCard, AuthorTaps, AuthorNFTCardBox } from "../authorPage/authorindex"
import images from "../img"


const author = () => {
    const popularArray = [
        { background: images.creatorbackground1, user: images.user1 },
        { background: images.creatorbackground2, user: images.user2 },
        { background: images.creatorbackground3, user: images.user3 },
        { background: images.creatorbackground4, user: images.user4 },
        { background: images.creatorbackground5, user: images.user5 },
        { background: images.creatorbackground6, user: images.user6 }
    ]
    const [collectables, setCollectables] = useState(true)
    const [created, setCreated] = useState(false)
    const [liked, setLiked] = useState(false)
    const [followers, setFollowers] = useState(false)
    const [following, setFollowing] = useState(false)

    return (
        <div className={Style.author}>
            <Banner bannerImage={images.creatorbackground10} />
            <AuthorProfileCard />
            <AuthorTaps setCollectables={setCollectables} setCreated={setCreated} setLiked={setLiked} setFollowers={setFollowers} setFollowing={setFollowing} />
            <AuthorNFTCardBox collectables={collectables} created={created} liked={liked} followers={followers} following={following} />
            <Title heading="Popular Creators" paragraph="Click on Music icon and enjoy NFT music and audio" />
            <div className={Style.author_box}>
                {popularArray.map((el, i) => (
                    <FollowerTabCard i={i} el={el} />
                ))}
            </div>
            <Brand />
        </div>
    )
}

export default author;