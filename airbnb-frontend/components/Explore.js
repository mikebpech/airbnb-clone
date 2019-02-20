import React from "react";
import styled from "styled-components";

const ExploreContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${props => props.theme.textColor};
  }
`;

const ExploreAirbnb = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(277px, 1fr));
  grid-gap: 20px;

  .item {
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr;
    background: #fff;
    height: 75px;
    box-shadow: ${props => props.theme.bs};
    border: 1px solid rgba(0, 0, 0, 0.1);
    user-select: none;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      img {
        filter: grayscale(100);
      }
    }

    &:active {
      transform: translateY(1px);
    }

    img {
      transition: all 0.2s;
      object-fit: cover;
      width: 100px;
      height: 100%;
    }

    p {
      display: flex;
      align-items: center;
      margin-left: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const Explore = () => {
  return (
    <ExploreContainer>
      <h1>Explore Airbnb</h1>
      <ExploreAirbnb>
        <div className="item">
          <img
            src={`https://source.unsplash.com/collection/3246533/300x200`}
            alt="home image"
          />
          <p>Homes</p>
        </div>
        <div className="item">
          <img
            src={`https://source.unsplash.com/collection/3841054/300x200`}
            alt="experience image"
          />
          <p>Experiences</p>
        </div>
        <div className="item">
          <img
            src={`https://source.unsplash.com/collection/622216/300x200`}
            alt="home image"
          />
          <p>Restaurants</p>
        </div>
      </ExploreAirbnb>
    </ExploreContainer>
  );
};

export default Explore;
