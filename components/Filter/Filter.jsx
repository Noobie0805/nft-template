import React, { useState } from 'react';
import { FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
//internal imports 

import Style from './Filter.module.css';
import images from '../../img';

const Filter = () => {
    const [filter, setFilter] = useState(true);
    const [image, setimage] = useState(true);
    const [video, setVideo] = useState(true);
    const [music, setMusic] = useState(true);

    //FUNCTIONS NOW...
    const openFilter = () => {
        if (!filter) {
            setFilter(true);
        }
        else {
            setFilter(false);
        }
    };

    const openImage = () => {
        if (!image) {
            setimage(true);
        }
        else {
            setimage(false);
        }
    };

    const openVideo = () => {
        if (!video) {
            setVideo(true);
        }
        else {
            setVideo(false);
        }
    };

    const openMusic = () => {
        if (!music) {
            setMusic(true);
        }
        else {
            setMusic(false);
        }
    };

    return (
        <div className={Style.filter}>
            <div className={Style.filter_box}>
                <div className={Style.filter_box_left}>
                    <button onClick={() => { }}>NFTs</button>
                    <button onClick={() => { }}>Art</button>
                    <button onClick={() => { }}>Music</button>
                    <button onClick={() => { }}>Sports</button>
                    <button onClick={() => { }}>Photography</button>
                </div>
                <div className={Style.filter_box_right}>
                    <div className={Style.filter_box_right_box} onClick={() => openFilter()}>
                        <FaFilter />
                        {/* IF filter is true then show filterDown else filterUp */}
                        <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                </div>
            </div>
            {
                filter && (
                    <div className={Style.filter_box_items}>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaWallet /> <span>0.01 ETH - 10 ETH</span>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => openImage()}>
                                <FaImages /> <small>Images</small>
                                {/* if image is open then show close button else show tick */}
                                {image ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => openVideo()}>
                                <FaVideo /> <small>Video</small>
                                {video ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => openMusic()}>
                                <FaMusic /> <small>Music</small>
                                {music ? <AiFillCloseCircle /> : <TiTick />}

                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaUserAlt /> <span>Verified</span>
                                <MdVerified />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );

};
export default Filter;
