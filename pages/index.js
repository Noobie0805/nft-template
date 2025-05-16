// THIS IS FOR THE PAGES THAT WILL BE USED IN THE APP..THE PAGES WILL BE IMPORTED HERE whereas INT THE app.js WE MADE NAVBAR AND FOOTER AS IT IS NEEDED IN EACH AND EVERY PAGE SO KEPT IT SEPERATELY..

import React from 'react'

// internal import...
import Style from "../styles/index.module.css"
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCards, Collection, FollowerTab } from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      {/* <Title heading="New Collection " paragraph="Discover the most outstanding NFTs in all topics of life." /> */}
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCards />
      <Title heading="Browse By category" paragraph="Explore the NFT int the most featured categories.." />
      <Category />
      <Subscribe />
    </div>
  );
};
export default Home;

