import React from "react";
import Lottie from "react-lottie";
import { Button } from "antd";
import { Link } from "react-router-dom";
import animationData from "../components/anime1.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
};

const Home = () => {
  return (
    <div
      style={{
        marginLeft: 300,
        marginRight: 300,
        marginTop: 80,
        marginBottom: 80
      }}
    >
      <h3>Home</h3>
      <Lottie options={defaultOptions} height={800} width={800} />
      <Button type="primary">
        <Link to="/other">Other Page</Link>
      </Button>
    </div>
  );
};

export default Home;
