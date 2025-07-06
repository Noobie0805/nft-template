import React, { useState, useMemo, useCallback, useContext } from 'react'
import Image from "next/image"
import { useDropzone } from 'react-dropzone'


//internal imports 
import Style from "../styles/account.module.css"
import images from "../img"
import { Form } from "../accountPage/accountPageIndex"
import { Banner } from '@/collectionPage/collectionindex'

const account = () => {
    const [fileUrl, setfileUrl] = useState(null)

    const onDrop = useCallback(async (acceptedFile) => {
        setfileUrl(acceptedFile[0]);
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        maxSize: 5000000,
    })

    return (
        <div className={Style.account}>
            <Banner bannerImage={images.creatorbackground10} />
            <div className={Style.account_info}>
                <h1>Profile Settings</h1>
                <p>You can set preferred display name, create your profile url and manage other personal settings...</p>
            </div>
            <div className={Style.account_box}>
                <div className={Style.account_box_img} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Image className={Style.account_box_img_img} src={images.user1} alt="user upload" width={150} height={150} />
                    <p className={Style.account_box_img_para}>Change Image</p>
                </div>
                <div className={Style.account_box_from}>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default account