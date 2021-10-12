import React from "react";
import styled from "styled-components";

const ServiceCont = styled.div`
  background: #999999;
  color: white;
  border-radius: 12px;
  margin: 0;

  img {
    width: 100%;
    height: 210px;
    padding: 0;
    border-radius: 12px 12px 0px 0px;
  }

  .service-info {
    padding: 10px;
    text-align: justify;

    h2 {
      text-align: center;
    }
  }
`;

const Service = (props) => {
  return (
    <ServiceCont className="box-shadow">
      <img src={props.pic} />
      <div className="service-info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </ServiceCont>
  );
};

export default Service;
