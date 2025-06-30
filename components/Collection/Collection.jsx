import React, { useState, useEffect } from 'react';
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from 'react-icons/bs';


// intrenal import
import Style from "./Collection.module.css"
import DaysComponents from './DaysComponents/DaysComponents';
import images from '../../img'

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);


    const CardArray = [
        { bg_main: images.creatorbackground9, bg1: images.creatorbackground1, bg2: images.creatorbackground9, bg3: images.creatorbackground1, user: images.user1 },
        { bg_main: images.creatorbackground5, bg1: images.creatorbackground3, bg2: images.creatorbackground10, bg3: images.creatorbackground10, user: images.user5 },
        { bg_main: images.creatorbackground3, bg1: images.creatorbackground4, bg2: images.creatorbackground3, bg3: images.creatorbackground3, user: images.user2 },
        { bg_main: images.creatorbackground10, bg1: images.creatorbackground5, bg2: images.creatorbackground4, bg3: images.creatorbackground5, user: images.user10 },
        { bg_main: images.creatorbackground4, bg1: images.creatorbackground2, bg2: images.creatorbackground5, bg3: images.creatorbackground2, user: images.user9 },
        { bg_main: images.creatorbackground6, bg1: images.creatorbackground9, bg2: images.creatorbackground6, bg3: images.creatorbackground7, user: images.user6 }
    ];
    const followingArray = [
        { bg_main: images.creatorbackground2, bg1: images.creatorbackground3, bg2: images.creatorbackground10, bg3: images.creatorbackground10, user: images.user5 },
        { bg_main: images.creatorbackground9, bg1: images.creatorbackground4, bg2: images.creatorbackground3, bg3: images.creatorbackground3, user: images.user2 },
        { bg_main: images.creatorbackground3, bg1: images.creatorbackground2, bg2: images.creatorbackground5, bg3: images.creatorbackground2, user: images.user9 },
    ];
    const newsArray = [
        { bg_main: images.creatorbackground9, bg1: images.creatorbackground4, bg2: images.creatorbackground3, bg3: images.creatorbackground3, user: images.user2 },
        { bg_main: images.creatorbackground5, bg1: images.creatorbackground5, bg2: images.creatorbackground4, bg3: images.creatorbackground5, user: images.user10 },
        { bg_main: images.creatorbackground3, bg1: images.creatorbackground9, bg2: images.creatorbackground6, bg3: images.creatorbackground6, user: images.user6 },
        { bg_main: images.creatorbackground10, bg1: images.creatorbackground1, bg2: images.creatorbackground9, bg3: images.creatorbackground1, user: images.user1 },
        { bg_main: images.creatorbackground4, bg1: images.creatorbackground3, bg2: images.creatorbackground10, bg3: images.creatorbackground10, user: images.user5 },
        { bg_main: images.creatorbackground6, bg1: images.creatorbackground2, bg2: images.creatorbackground5, bg3: images.creatorbackground2, user: images.user9 },
    ];

    const openPopular = () => {
        if (!popular) {
            setPopular(true)
            setFollowing(false)
            setNews(false)
        }
        else {
            setPopular(false)
        }
    }
    const openFollower = () => {
        if (!following) {
            setFollowing(true)
            setPopular(false)
            setNews(false)
        }
        else {
            setFollowing(false)
        }
    }
    const openNews = () => {
        if (!news) {
            setNews(true)
            setPopular(false)
            setFollowing(false)
        }
        else {
            setNews(false)
        }
    }


    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Collections </h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openPopular()}>
                            <BsFillAlarmFill /> 24 hrs
                        </button>
                        <button onClick={() => openFollower()}>
                            <BsCalendar3 /> 7 days
                        </button>
                        <button onClick={() => openNews()}>
                            <BsFillCalendarDateFill />  30 days
                        </button>
                    </div>
                </div>
            </div>

            {popular && (
                <div className={Style.collection_box}>
                    {CardArray.map((el, i) => (
                        <DaysComponents key={i + 1} el={el} i={i} />
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.collection_box}>
                    {followingArray.map((el, i) => (
                        <DaysComponents key={i + 1} el={el} i={i} />
                    ))}
                </div>
            )}
            {news && (
                <div className={Style.collection_box}>
                    {newsArray.map((el, i) => (
                        <DaysComponents key={i + 1} el={el} i={i} />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Collection;
