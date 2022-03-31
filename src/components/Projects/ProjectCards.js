import React from "react";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {MdArrowRightAlt} from "react-icons/md"
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function ProjectCards(props) {
  return (
    <CustomCard>
      <ImgHolder>
        <Link to={props.link}>
          <CardImg src={props.imgPath} alt="card-img" />
        </Link>
      </ImgHolder>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>
        <p>{props.description} </p>
         <Link to={props.link} style={{"color":"#0500FF","textDecoration":"none"}}>Read more &gt;</Link>
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

