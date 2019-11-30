import React from "react";
import Lottie from "react-lottie";

import animationData from "../components/anime1.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
};

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <Lottie options={defaultOptions} height={800} width={800} />
    </div>
  );
};

export default Home;
