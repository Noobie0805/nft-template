import React from 'react'
import { TiTick } from 'react-icons/ti'

//internal imports
import Style from "./SubscriptioN.module.css"
import { Button } from "../components/componentsindex"

const SubscriptioN = ({ el, i }) => {
    return (
        <div className={Style.SubscriptioN}>
            <div className={Style.SubscriptioN_box}>
                <span className={Style.SubscriptioN_box_span}>{el.plan}</span>
                <small className={Style.SubscriptioN_box_small}>
                    {el.popular || ""}
                </small>
                <p className={Style.SubscriptioN_box_price}> {el.price} <small className={Style.SubscriptioN_box_price_period}>/mo</small></p>
                <div className={Style.SubscriptioN_box_info}>
                    {el.service.map((el, i) => (
                        <p className={Style.SubscriptioN_box_info_para} key={i + 1}>
                            <span><TiTick color='grey' /></span>
                            {el}
                        </p>
                    ))}
                </div>
                <Button btnName="Submit" handleClick={() => { }} classStyle={Style.button} />
                <span className={Style.SubscriptioN_box_info_span}>{el.info}</span>
            </div>
        </div>
    )
}

export default SubscriptioN