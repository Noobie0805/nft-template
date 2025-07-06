import React from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'

//internal imports
import Style from "./Form.module.css"
import { Button } from "../../components/componentsindex"

const Form = () => {
    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    <div className={Style.Form_box_input}>
                        <label htmlFor='name'>Username</label>
                        <input className={Style.Form_box_input_username} type='text' placeHolder="Clark Kent" />
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor='email'>Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type='text' placeholder="Enter your email.." />
                        </div>
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor='description'>Description</label>
                        <textarea name="" id="" cols="30" rows="6" placeholder="Something about yourself in few words! "></textarea>
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor='website'>Website</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type='text' placeholder='Enter the website..'></input>
                        </div>
                    </div>
                    <div className={Style.Form_box_input_social}>
                        <div className={Style.Form_box_input}>
                            <label htmlFor='facebook'>Facebook</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder="http://clarkkent/facebook"></input>
                            </div>
                        </div>
                        <div className={Style.Form_box_input}>
                            <label htmlFor='twitter'>Twitter</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder="http://clarkkent/twitter"></input>
                            </div>
                        </div>
                        <div className={Style.Form_box_input}>
                            <label htmlFor='instagram'>Instagram</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder="http://clarkkent/instagram"></input>
                            </div>
                        </div>
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor='wallet'>Wallet Address</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type='text' placeholder='0x6F8d9dje6i34jp0fs34jk3d4t9' />
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>
                    <div className={Style.Form_box_btn}>
                        <Button classStyle={Style.button} btnName="Upload Profile" onClick={() => { }} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form