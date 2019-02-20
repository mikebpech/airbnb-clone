import React from "react";
import styled from "styled-components";
import Explore from "../components/Explore";
import IntroducingPlus from "../components/IntroducingPlus";

const Container = styled.div`
  margin-top: 2rem;
`;

const Home = () => (
  <Container>
    <Explore />
    <IntroducingPlus />
  </Container>
);

export default Home;
