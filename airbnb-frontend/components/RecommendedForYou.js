import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 6rem;
  h2 {
    font-weight: 600;
    color: ${props => props.theme.textColor};
  }
`;

const RecommendedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  height: 300px;

  .item {
    background-size: cover;
  }

  .paris {
    background-image: url("https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large");
  }

  .tokyo {
    background-image: url("https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large");
  }

  .losangeles {
    background-image: url("https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large");
  }

  .barcelona {
    background-image: url("https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large");
  }

  .london {
    background-image: url("https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large");
  }
`;

const RecommendedForYou = () => (
  <Container>
    <h2>Recommended for you</h2>
    <RecommendedList>
      <div className="item paris">1</div>
      <div className="item tokyo">2</div>
      <div className="item losangeles">3</div>
      <div className="item barcelona">4</div>
      <div className="item london">5</div>
    </RecommendedList>
  </Container>
);

export default RecommendedForYou;
