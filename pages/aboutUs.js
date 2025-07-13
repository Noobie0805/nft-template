import React from 'react';
import Image from 'next/image';

//internal imports
import Style from "../styles/aboutUs.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";


const AboutUs = () => {
    const founderArray = [
        { name: "Niam O'Shea", position: "Co-founder and Cheif Executive", image: images.founder1 },
        { name: "Danien Jame", position: "Co-founder and Cheif Executive", image: images.founder2 },
        { name: "Orla Dwyer", position: "Co-founder, Chairman", image: images.founder3 },
        { name: "Darla Frizzer", position: "Co-founder, Cheif Strategy Officer", image: images.founder4 },
    ];
    const factsArray = [
        { title: "10 million", info: "Articles have been public around the world (as of Sept. 30, 2021)" },
        { title: "100,000", info: "Registered users account (as of Sept. 30, 2021)" },
        { title: "220+", info: "Countries and regions have our presence (as of Sept. 30, 2021)" },
    ]

    return (
        <div className={Style.aboutUs}>
            <div className={Style.aboutUs_box}>
                <div className={Style.aboutUs_box_hero}>
                    <div className={Style.aboutUs_box_hero_left}>
                        <h1>👋About Us..</h1>
                        <p>We're impartial and independent, and every day we create disntinctive content which infrom , educate and entertain millions of people around the world. </p>
                    </div>
                    <div className={Style.aboutUs_box_hero_right}>
                        <Image src={images.heroright1} width={800} height={400} />
                    </div>
                </div>
                <div className={Style.aboutUs_box_title}>
                    <h1>🌴 Founders</h1>
                    <p>We are impartial and independent. Every day we create distinctive, world-class programmes and content.  </p>
                </div>
                <div className={Style.aboutUs_box_founder}>
                    <div className={Style.aboutUs_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutUs_box_founder_box_img}>
                                <Image className={Style.aboutUs_box_founder_box_img_img} src={el.image} alt={el.name} width={270} height={250} />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.aboutUs_box_title}>
                    <h1>🚀 Fast Facts</h1>
                    <p>We are impartial and independent. Every day we create distinctive, world-class programmes and content.  </p>
                </div>
                <div className={Style.aboutUs_box_facts}>
                    <div className={Style.aboutUs_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutUs_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;