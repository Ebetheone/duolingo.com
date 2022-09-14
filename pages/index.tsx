import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import World from "../components/World";
import CarouselItem from "../components/Carousel";
import Texts from "../components/Texts";

const IndexPage = () => (
  <div className="w-full m-0 scroll-smooth">
    <Header />
    <div className="w-full h-full bg-[#235390] bg-[url('https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg')]">
      <World />
      <CarouselItem />
    </div>
    <div className="w-full h-full bg-white">
      <Texts />
    </div>
    <div className="w-full h-full bg-[#235390] bg-[url('https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg')]">
      <Footer />
    </div>
  </div>
);

export default IndexPage;
