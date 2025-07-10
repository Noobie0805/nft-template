import React, { useEffect, useState } from 'react';
import Image from "next/image"

//internal imports
import Style from "../styles/connectWallet.module.css"
import images from "../img"


const ConnectWallet = () => {
    const [activeBtn, setactiveBtn] = useState(0);
    const providerArray = [
        { image: images.metamask, name: "Metamask" },
        { image: images.walletConnect, name: "Wallet Connect" },
        { image: images.CoinBase, name: "Coinbase" },
        { image: images.Fortmatic, name: "Fortmatic" },
    ]
    return (
        <div className={Style.connectWallet}>
            <div className={Style.connectWallet_box}>
                <h1>Connect your Profile</h1>
                <p className={Style.connectWallet_box_para}>
                    Connect with your wallet providers or create a new one !
                </p>
                <div className={Style.connectWallet_box_provider}>
                    {providerArray.map((el, i) => (
                        <div className={`${Style.connectWallet_box_provider_item} ${activeBtn == i + 1 ? Style.active : ""}`} key={i + 1} onClick={() => setactiveBtn(i + 1)}>
                            <Image className={Style.connectWallet_box_provider_item_img} src={el.image} alt={el.name} width={50} height={50} />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet;