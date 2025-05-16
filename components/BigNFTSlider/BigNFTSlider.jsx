import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeft, TbArrowBigRight } from 'react-icons/tb';


// internal imports
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from '../Button/Button';

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);
    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Diana Prince",
            collection: "Gymnastics",
            price: "0000000555 ETH",
            like: 5701,
            image: images.user6,
            nftImage: images.nft_image_1,
            time: {
                days: 2,
                hours: 5,
                minutes: 10,
                seconds: 38
            }
        },
        {
            title: "Hoii NFT",
            id: 2,
            name: "Mary Jane",
            collection: "Gymnastics",
            price: "0000000356 ETH",
            like: 2364,
            image: images.user4,
            nftImage: images.nft_image_2,
            time: {
                days: 5,
                hours: 7,
                minutes: 19,
                seconds: 64
            }
        },
        {
            title: "Hola NFT",
            id: 3,
            name: "Gwen Stacy",
            collection: "Gymnastics",
            price: "0000000696 ETH",
            like: 3365,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 6,
                hours: 12,
                minutes: 36,
                seconds: 12
            }
        },
        {
            title: "Hey NFT",
            id: 4,
            name: "Natasha Romanoff",
            collection: "Gymnastics",
            price: "0000000555 ETH",
            like: 5701,
            image: images.user2,
            nftImage: images.nft_image_1,
            time: {
                days: 2,
                hours: 5,
                minutes: 10,
                seconds: 38
            }
        }
    ]
    // -----INCREMENT FUNCTION-----work when arrows are clicked..
    const inc = useCallback(() => {
        if (idNumber + 1 < sliderData.length) {
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, sliderData.length]);
    // -----DECREMENT FUNCTION-----work when arrows are clicked..
    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1);
        }
    }, [idNumber]);
    // -----USE EFFECT-----to set the first slider when the page loads..
    // useEffect(() => {
    //     inc();
    // }, []);


    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image className={Style.bigNFTSlider_box_left_creator_profile_img} src={sliderData[idNumber].image} alt="profile image" width={50} height={50} />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h4>{sliderData[idNumber].name}
                                    <span><MdVerified /></span>
                                </h4>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection} </h4>
                            </div >
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{sliderData[idNumber].price}
                                <span> $ 21,221</span>
                            </p>
                        </div>
                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
                            <span>Auction ends in</span>
                        </p>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Mins</span>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Secs</span>
                            </div>

                        </div>
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place Order   " handleClick={() => { }} />
                            <Button btnName="View Token " handleClick={() => { }} />
                        </div>
                    </div>


                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeft className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={() => dec()} />
                        <TbArrowBigRight className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={() => inc()} />
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image src={sliderData[idNumber].nftImage} className={Style.bigNFTSlider_box_right_box_img} alt="NFT Image" />
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default BigNFTSlider;
