import React from "react";
import "./home.css";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <div className="container home" id="home">
        <Navbar />
        <div className="home__content">
          <div className="home__content-rigth">
            <h1 className="home__content-right-tittle">
              Let's help together to invest in the crypto market.
            </h1>
            <p className="home__content-right-text">
              This is not investment advice, but the opinion of other investors
              is certainly very interesting. Here you will be able to know, by
              voting, what they think about the possible rise or fall in value
              of different cryptocurrencies.{" "}
            </p>
            <p className="home__content-right-text">
              In addition, know the current state of the market in real time.
            </p>
          </div>
          <div className="home__content-left">texto</div>
        </div>
      </div>
    </>
  );
};

export default Home;
