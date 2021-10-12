import React from "react";
import styled from "styled-components";

const BannerCont = styled.div`
  background-image: url("https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  background-color: white;
  // background-blend-mode: overlay;
  background-position: cover;
  background-repeat: no-repeat;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1.5rem;
`;

const Banner = (props) => {
  return (
    <BannerCont>
      <div>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
    </BannerCont>
  );
};

export default Banner;
