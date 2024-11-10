import { useEffect, useState } from "react";
import "./Home.css";
import homeImage from "../assets/home.png";
const Home = () => {
  return (
    <>
      <img
        src={homeImage}
        alt="Home"
        className="h-auto object-cover m-4 mx-auto w-[80%] sm:w-[30%]"
      />
    </>
  );
};

export default Home;
