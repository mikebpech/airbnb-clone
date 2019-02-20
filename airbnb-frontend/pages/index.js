import React from "react";
import styled from "styled-components";
import Explore from "../components/Explore";
import IntroducingPlus from "../components/IntroducingPlus";
import RecommendedForYou from "../components/RecommendedForYou";

const Container = styled.div`
  margin-top: 2rem;
`;

const Home = () => (
  <Container>
    <Explore />
    <IntroducingPlus />
    <RecommendedForYou />
  </Container>
);

export default Home;
