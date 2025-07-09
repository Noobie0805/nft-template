import React, { useState } from 'react'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md'
import { FaPercent } from 'react-icons/fa'
import { AiTwotonePropertySafety } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import Image from "next/image"

//internal imports
import Style from "./uploadNFTPage.module.css"
import formStyle from "../accountPage/Form/Form.module.css"
import images from "../img"
import { Button } from '@/components/componentsindex'
import { DropZone } from './uploadNFTindex'

const UploadNFTPage = () => {
    const [active, setactive] = useState(0)
    const [itemName, setitemName] = useState("")
    const [website, setwebsite] = useState("")
    const [description, setdescription] = useState("")
    const [royalties, setroyalties] = useState("")
    const [fileSize, setfileSize] = useState("")
    const [category, setcategory] = useState(0)
    const [properties, setproperties] = useState("")

    const categoryArray = [
        { image: images.nft_image_1, category: "Sports", },
        { image: images.nft_image_2, category: "Art", },
        { image: images.nft_image_3, category: "Music", },
        { image: images.nft_image_1, category: "Digital", },
        { image: images.nft_image_2, category: "Photography", }
    ]
    return (
        <div className={Style.upload}>
            <DropZone
                title="JPG, PNG, WEBM ( Max : 100 MB )" heading="Drag & drop file" subHeading="Browse media on your device"
                itemName={itemName} website={website} description={description} royalties={royalties} fileSize={fileSize}
                category={category} image={images.upload} properties={properties}
            />
            <div className={Style.upload_box}>
                <div className={formStyle.Form_box_input}>
                    <label htmlFor='nft'>Item Name</label>
                    <input className={formStyle.Form_box_input_username} type='text' placeHolder="Clark Kent" onChange={(e) => setitemName(e.target.value)} />
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor='website'>Website</label>
                    <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                            <MdOutlineHttp />
                        </div>
                        <input type='text' placeholder='Enter the website..' onChange={(e) => setwebsite(e.target.value)}></input>
                    </div>
                    <p className={formStyle.upload_box_input_para}>
                        Cyscript will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your webpage with more details.
                    </p>
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor='description'>Description</label>
                    <textarea name="" id="" cols="30" rows="6" placeholder="Something about yourself in few words!" onChange={(e) => setdescription(e.target.value)}></textarea>
                    <p>The description will be included on the item's details page underneath its image. Markdown syntax is supported. </p>
                </div>
                <div className={formStyle.Form_box_input}>
                    <label htmlFor='name'>Choose collection </label>
                    <p>Choose an existing collection or create a new one..</p>
                    <div className={Style.upload_box_slider_div}>
                        {categoryArray.map((el, i) => (
                            <div className={`${Style.upload_box_slider} ${active == i + 1 ? Style.active : ""}`} key={i + 1} onClick={() => (setactive(i + 1), setcategory(el.category))}>
                                <div className={Style.upload_box_slider_box}>
                                    <div className={Style.upload_box_slider_box_img}>
                                        <Image className={Style.upload_box_slider_box_img_img} src={el.image} alt="background image" width={70} height={70} />
                                    </div>
                                    <div className={Style.upload_box_slider_box_img_icon}>
                                        <TiTick />
                                    </div>
                                </div>
                                <p>Crypto Legend - {el.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={formStyle.Form_box_input_social}>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='Royalties'>Royalties</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <FaPercent />
                            </div>
                            <input type="text" placeholder="20%" onChange={(e) => setroyalties(e.target.value)}></input>
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='Size'>Size</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <MdOutlineAttachFile />
                            </div>
                            <input type="text" placeholder="165 MB" onChange={(e) => setfileSize(e.target.value)}></input>
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor='Properties'>Properties</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <AiTwotonePropertySafety />
                            </div>
                            <input type="text" placeholder="Properties" onChange={(e) => setproperties(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className={Style.upload_box_btn}>
                    <Button btnName="Upload" handleClick={() => { }} classStyle={Style.upload_box_btn_style} />
                    <Button btnName="Preview" handleClick={() => { }} classStyle={Style.upload_box_btn_style} />
                </div>
            </div>
        </div >
    )
}

export default UploadNFTPage;