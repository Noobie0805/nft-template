import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';

//internal imports
import Style from './Category.module.css';
import images from '../../img';

const Category = () => {
    const CategoryArray = [1, 2, 3, 4, 5, 6]  // data will come from the API..
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
                {CategoryArray.map((el, i) => (
                    <div className={Style.category_box} key={i + 1}>
                        <Image src={images.creatorbackground1} className={Style.category_box_img} alt="Background Image" width={350} height={150} objectFit="cover" />
                        <div className={Style.category_box_title}>
                            <span> <BsCircleFill /></span>
                            <div className={Style.category_box_title_info}>
                                <h4>Entertainment</h4>
                                <small>1995 NFTs</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Category;
