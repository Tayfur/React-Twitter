import React from "react";

import { Container } from "./HomeStyle";
import { Navbar, Feed, Explore } from "../Components/index";
interface Props {}

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Feed />
        <Explore />
      </Container>
    </>
  );
};

export default Home;
