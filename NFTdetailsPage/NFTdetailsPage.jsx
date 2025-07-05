import React from 'react'

//internal imports 
import Style from "./NFTdetailsPage.module.css"
import { NFTdescription, NFTdetailsImage } from '@/NFTdetailsPage/NFTdetailsIndex'


const NFTdetailsPage = () => {
    return (
        <div className={Style.NFTdetailsPage}>

            <div className={Style.NFTdetailsPage_box}>
                <NFTdetailsImage />
                <NFTdescription />
            </div>
        </div>
    )
}

export default NFTdetailsPage