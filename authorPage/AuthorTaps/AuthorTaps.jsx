import React, { useState } from 'react'
// import Image from "next/image"
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti'


//internal imports 
import Style from "./AuthorTaps.module.css"
// import images from "../../img"

const AuthorTaps = ({ setFollowing, setFollowers, setLiked, setCreated, setCollectables }) => {
    const [openList, setOpenList] = useState(false)
    const [activeBtn, setActiveBtn] = useState(1)
    const [selectedMenu, setSelectedMenu] = useState("Most Recent")

    const listArray = ["Created By Admin", "Most Appreciated", "Most Discussed", "Most Viewed"]

    const openDropDownList = () => {
        if (!openList) {
            setOpenList(true)
        }
        else {
            setOpenList(false)
        }
    }
    const openTab = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Collectables") {
            setCollectables(true)
            setCreated(false)
            setLiked(false)
            setFollowing(false)
            setFollowers(false)
            setActiveBtn(1)
        }
        else if (btnText == "Created") {
            setCollectables(false)
            setCreated(true)
            setLiked(false)
            setFollowing(false)
            setFollowers(false)
            setActiveBtn(2)
        }
        else if (btnText == "Liked") {
            setCollectables(false)
            setCreated(false)
            setLiked(true)
            setFollowing(false)
            setFollowers(false)
            setActiveBtn(3)
        }
        else if (btnText == "Following") {
            setCollectables(false)
            setCreated(false)
            setLiked(false)
            setFollowing(true)
            setFollowers(false)
            setActiveBtn(4)
        }
        else if (btnText == "Followers") {
            setCollectables(false)
            setCreated(false)
            setLiked(false)
            setFollowing(false)
            setFollowers(true)
            setActiveBtn(5)
        }
    }

    return (
        <div className={Style.AuthorTaps}>
            <div className={Style.AuthorTaps_box}>
                <div className={Style.AuthorTaps_box_left}>
                    <div className={Style.AuthorTaps_box_left_btn}>
                        <button
                            className={`${activeBtn == 1 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}>Collectables{" "}
                        </button>
                        <button
                            className={`${activeBtn == 2 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}>Created{" "}
                        </button>
                        <button
                            className={`${activeBtn == 3 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}>Liked{" "}
                        </button>
                        <button
                            className={`${activeBtn == 4 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}>Following {" "}
                        </button>
                        <button
                            className={`${activeBtn == 5 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}>Followers{" "}
                        </button>
                    </div>
                </div>
                <div className={Style.AuthorTaps_box_right}>
                    <div className={Style.AuthorTaps_box_right_para} onClick={() => openDropDownList()}>
                        <p>{selectedMenu}</p>
                        {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                    </div>
                    {openList && (
                        <div className={Style.AuthorTaps_box_right_list}>
                            {listArray.map((el, i) => (
                                <div className={Style.AuthorTaps_box_right_list_item} key={i + 1} onClick={() => setSelectedMenu(el)}>
                                    <p>{el}</p>
                                    <span>{selectedMenu == el && <TiTick />}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthorTaps