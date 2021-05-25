import React, { useState } from "react";

import { Container } from "./HomeStyle";
import { Navbar, Feed, Explore } from "../Components/index";
import { data } from "../Components/Feed/Data";
interface Props {}

const Home: React.FC = () => {
  const [Data, setData] = useState(data);
  return (
    <>
      <Container>
        <Navbar />
        <Feed Posts={data} />
        <Explore />
      </Container>
    </>
  );
};

export default Home;
