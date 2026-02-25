import React from "react";
import Navbar from "../Navbar";
import Carousel from "../Carousel";
import Featured from "../Featured";
import Categories from "../Categories";
import Trending from "../Trending";
import ServicePromise from "../ServicePromise";
import Blog from "../Blog";
import FAQ from "../FAQ";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Navbar  />
      <Carousel />
      <Featured />
      <Categories />
      <Trending />
      <ServicePromise />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
