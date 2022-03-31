import React from "react";
import styled from "@emotion/styled";

import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import SocialButtons from "./Social"
import ellipse3 from "../../Assets/ellipse3.png";
import profilepic from "../../Assets/angela_profile.png";
import { FaLinkedinIn } from "react-icons/fa";
import pdf from "../../Assets/angelalee_resume_2022.pdf";
import {MdArrowRightAlt} from "react-icons/md";


export default function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
            <Col md={7} style={{"margin": "0 auto"}}>
              <Mainheader>
                ABOUT ANGELA
              </Mainheader>
              <InfoContainer>
                <ProfilePic>
                  <img src={profilepic} style={{"maxWidth":"70%"}}/> 
                </ProfilePic>
                <ProfileLinks>
                  <Blurb>Hi there! I'm Angela – I love to create things. Whether it's coding new solutions, building creative strategies, or creating beautiful, user-centric designs, I thrive wearing many hats that rely on technical, creative, and strategic expertise.  </Blurb>
                  <Blurb>I'm currently open to new NYC-based or remote roles in the tech space. Please feel free to reach out! I'd love to chat.</Blurb>
                  <p><span style={{"fontFamily":"Space Mono, monospace"}}>LINKEDIN:</span> <CustomLink href="https://www.linkedin.com/in/lee-angela">linkedin.com/in/lee-angela  <MdArrowRightAlt/> </CustomLink> </p>
                  <p><span style={{"fontFamily":"Space Mono, monospace"}}>RESUME:</span> <CustomLink href={pdf}>download my resume <MdArrowRightAlt/> </CustomLink> </p>
                  <p><span style={{"fontFamily":"Space Mono, monospace"}}>EMAIL:</span> <CustomLink href="mailto:lee.angela.ny@gmail.com">lee.angela.ny@gmail.com  <MdArrowRightAlt/> </CustomLink> </p>
                  <hr />
                  <p><span style={{"fontFamily":"Space Mono, monospace"}}>EDUCATION:</span> University of Pennsylvania '16</p>
                  <p>BSE, Digital Media Design <br></br>(Computer Science/Computer Graphics) <CustomLink href="http://cg.cis.upenn.edu/dmd.html">learn more <MdArrowRightAlt/> </CustomLink> </p>
                  <hr />
                  <p><span style={{"fontFamily":"Space Mono, monospace"}}>JUST FOR FUN:</span>I make ceramics, clothes, and DIY interior decor. <CustomLink href="https://instagram.com/angelamakesthings">@angelamakesthings <MdArrowRightAlt/> </CustomLink></p>

                </ProfileLinks>
              </InfoContainer>
            </Col>
        <img
            src={ellipse3}
            alt="home pic"
            className="img-fluid"
            style={{ "width": "800px", "position":"absolute", "left": "-20%","top":"7%", "zIndex": "-1"}}
          />
        
        </Row>
      </Container>
    </Container>
  );
}
const InfoContainer = styled.div`
  display:flex;
  gap:40px;
  margin-top:50px;
  margin-bottom:200px;
`;
const ProfilePic = styled.div`
  flex-grow:1;
  width:30%;
`;
const Blurb = styled.p`
  margin-bottom:30px;
`;
const ProfileLinks = styled.div`
  flex-grow:1;
  width:70%;
  font-family:'Spartan', sans-serif;
  text-align:left;
`;
const Mainheader = styled.h1`
  font-family: 'Space Mono', monospace;
  margin-bottom:20px;
  font-size:50px;
`;

const HeadingDescription = styled.h1`
  font-family: 'Spartan', sans-serif;
  font-size:23px;
  letter-spacing: -1px;
`;
const CustomLink = styled.a`
  text-decoration:none;
  color:#0500FF;
  :hover {
    color:#0500FF;
    font-weight:bold;
  }
`;