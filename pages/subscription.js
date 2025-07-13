import React from 'react'

//internal imports 
import Style from "../styles/subscription.module.css"
import SubscriptioN from '@/SubscriptionPage/SubscriptioN'

const Subscription = () => {
    const subscriptionArray = [
        { plan: "STARTER", price: "$5", popular: "", service: ["Automated Reporting", "10 Builds", "Faster Processing", "Customizations"], info: "Literally you probably haven't heard of them jean shorts." },
        { plan: "BASIC", price: "$15", popular: "POPULAR", service: ["Everything in Starter", "100 Builds", "Progress Reports", "Premium Support"], info: "Literally you probably haven't heard of them jean shorts." },
        { plan: "PLUS", price: "$25", popular: "", service: ["Everything in Basic", "Unlimited Builds", "Advanced Analytics", "Company Evaluations"], info: "Literally you probably haven't heard of them jean shorts." },
    ]
    return (
        <div className={Style.Subscription}>
            <div className={Style.Subscription_box}>
                <div className={Style.Subscription_box_info}>
                    <h1>💎 Subscription</h1>
                    <p>Pricing to fit the needs of any company size.</p>
                </div>
                <div className={Style.Subscription_box_box}>
                    {subscriptionArray.map((el, i) => (
                        <SubscriptioN key={i + 1} i={1} el={el} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Subscription