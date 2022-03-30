import React from "react";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import styled from "@emotion/styled";


export default function ProjectCards(props) {
  return (
    <CustomCard>
      <ImgHolder>
        <CardImg src={props.imgPath} alt="card-img" />
      </ImgHolder>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>
        {props.description}
      </CardDescription>
    </CustomCard>
  );
}

const CustomCard = styled.div`
  padding:30px;
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:30%;
`;
const ImgHolder = styled.div`
  min-width: 100%;
  height:300px;
  display:block;
`;
const CardImg = styled.img`
  max-width:100%;
  min-height:100%;
  max-height:100%;
  width: auto;
  height: auto;
  object-fit:cover;
`;
const CardTitle = styled.div`
  margin:20px 0 10px;
  font-family:'Space Mono', monospace;
  display:block;
  width:100%;
`;
const CardDescription = styled.p`
  font-family:'Spartan', sans-serif;
`;

