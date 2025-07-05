import React from 'react'
import Image from 'next/image'

//internal imports 
import Style from "../styles/NFTdetails.module.css"
import images from "../img"

import NFTdetailsPage from "../NFTdetailsPage/NFTdetailsPage"
import { Buttons, Brand, Category } from "../components/componentsindex"
import { Banner } from "../collectionPage/collectionindex"


const NFTdetails = () => {
    return (
        <div>
            <Banner bannerImage={images.creatorbackground10} />
            <NFTdetailsPage />
            <Category />
            <Brand />
        </div>
    )
}

export default NFTdetails