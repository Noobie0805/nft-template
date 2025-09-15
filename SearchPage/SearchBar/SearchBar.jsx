import React from 'react'
import Image from 'next/image'
import { BsSearch, BsArrowRight } from "react-icons/bs"

//internal imports 
import Style from "./SearchBar.module.css"
// import images from "../../img"

const SearchBar = () => {
    return (
        <div className={Style.SearchBar}>
            <div className={Style.SearchBar_box}>
                <BsSearch className={Style.SearchBar_box_icon} />
                <input type='text' placeholder="Find what you need..." />
                <BsArrowRight className={Style.SearchBar_box_icon} />
            </div>
        </div>
    )
}

export default SearchBar