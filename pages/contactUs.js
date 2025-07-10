import React from 'react'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import { HiOutlineMail } from 'react-icons/hi'

//internal imports

import Style from "../styles/contactUs.module.css"
import images from "../img"
import formStyle from "../accountPage/Form/Form.module.css"
import { Buttons } from "../components/componentsindex"

const ContactUs = () => {
    return (
        <div className={Style.contactUs}>
            <div className={Style.contactUs_box}>
                <h1>Contact </h1>
                <div className={Style.contactUs_box_box}>
                    <div className={Style.contactUs_box_box_left}>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>🏠 Address</h3>
                            <p>Photo booth tattooed prism, portland taiyaki hoodie nutral typewriter</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>💌 Email</h3>
                            <p>no.example@example.com</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>☎️ Phone</h3>
                            <p>no.example@example.com</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>🌍 Socials</h3>
                            <a href='#' alt="facebook"><TiSocialFacebook /></a>
                            <a href='#' alt="Linkedin"><TiSocialLinkedin /></a>
                            <a href='#' alt="Twitter"><TiSocialTwitter /></a>
                            <a href='#' alt="Youtube"><TiSocialYoutube /></a>
                            <a href='#' alt="Instagram"><TiSocialInstagram /></a>
                        </div>
                    </div>
                    <div className={Style.contactUs_box_box_right}>
                        <form>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor='name'>Username</label>
                                <input className={formStyle.Form_box_input_username} type='text' placeHolder="Clark Kent" />
                            </div>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor='email'>Email</label>
                                <div className={formStyle.Form_box_input_box}>
                                    <div className={formStyle.Form_box_input_box_icon}>
                                        <HiOutlineMail />
                                    </div>
                                    <input type='text' placeholder="Enter your email.." />
                                </div>
                            </div>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor='description'>Description</label>
                                <textarea name="" id="" cols="30" rows="6" placeholder="Something about yourself in few words! "></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;