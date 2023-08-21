import React from "react";
import NavBar from "./NavBar";
import ProgressCard from "./CardList/ProgressCard";
import Cards from "./CardList/Cards";
import { PartnerCard } from "./CardsList/PartnerCard";

const Home = () => {
  return (
    <div>
      <NavBar />
      <ProgressCard />
      <hr />
      <PartnerCard />
      <hr />
      <Cards />
    </div>
  );
};

export default Home;