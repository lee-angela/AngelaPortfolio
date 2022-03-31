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
        <p>{props.description} <Link to={props.link} style={{"color":"#0500FF","textDecoration":"none"}}>Read more <MdArrowRightAlt/> </Link></p>
      </CardDescription>

      <TagContainer>
        {props.tags && props.tags.map((tag, i) => (
          <TagPill>
            {tag}
          </TagPill>
        ))}
      </TagContainer>

    </CustomCard>
  );
}
const TagContainer = styled.div`
    display:flex;
    align-items: flex-start;
    align-content:flex-start;
    gap:6px;
    flex-wrap:wrap;
    margin:0 0 10px;
`;
const TagPill = styled.div`
  border-radius:20px;
  font-size:13px;
  background:#f0f0f0;
  font-family:'Space Mono', monospace;
  display:inline-block;
  padding:4px 20px;
`;
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
  font-size:larger;
  display:block;
  width:100%;
`;
const CardDescription = styled.p`
  font-family:'Spartan', sans-serif;
`;

