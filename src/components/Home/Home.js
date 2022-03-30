import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import ellipse2 from "../../Assets/ellipse2.png";

import ProjectCard from "../Projects/ProjectCards";
import WorkFilters from "./WorkFilters";

import datadog_browsertestdemo from "../../Assets/Projects/datadog_browsertestdemo.png";
import datadog_synthetics from "../../Assets/Projects/datadog_synthetics.png";
import forter_element from "../../Assets/Projects/forter_forterelement.png";
import forter_newbrand from "../../Assets/Projects/forter_newbrand_homepage.png";
import forter_packaging from "../../Assets/Projects/forter_packaging.png";
import forter_dashboard from "../../Assets/Projects/forter_productdashboard.jpeg";
import styled from "@emotion/styled";


export default function Home() {

  const [prodDevFilterState, setProdDevFilterState] = React.useState(true);
  const [gtmFilterState, setGtmFilterState] = React.useState(true);
  const [engFilterState, setEngFilterState] = React.useState(true);
  const [marketingFilterState, setMarketingFilterState] = React.useState(true);
  const [salesFilterState, setSalesFilterState] = React.useState(true);
  const [designFilterState, setDesignFilterState] = React.useState(true);

  return (
    <section>
      <CustomContainer>
          <Row>
            <Col md={7} className="home-header">
              <Mainheader>
                TECHNICAL PRODUCT STRATEGIST
              </Mainheader>
              <HeadingDescription>
                Hi, I’m Angela. I was previously at Apple, Datadog, and Forter. With a strong background in software engineering, user experience design, and strategy, my superpowers are cross-functional fluency, entrepreneurship, and detailed execution.
              </HeadingDescription>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={ellipse2}
                alt="home pic"
                className="img-fluid"
                style={{ "width": "800px", "position":"absolute", "right": "-2%", "zIndex": "-1"}}
              />
            </Col>
          </Row>

          <WorkFilters 
            prodDevFilterState={prodDevFilterState}
            setProdDevFilterState={setProdDevFilterState}
            gtmFilterState={gtmFilterState}
            setGtmFilterState={setGtmFilterState}
            engFilterState={engFilterState}
            setEngFilterState={setEngFilterState}
            marketingFilterState={marketingFilterState}
            setMarketingFilterState={setMarketingFilterState}
            salesFilterState={salesFilterState}
            setSalesFilterState={setSalesFilterState}
            designFilterState={designFilterState}
            setDesignFilterState={setDesignFilterState}
          />

          <Container fluid className="project-section">
            <Container>
              <Row style={{ paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={forter_packaging}
                    isBlog={false}
                    title="Forter: Product Packaging"
                    description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                    link="https://github.com/soumyajit4419/Chatify"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={forter_newbrand}
                    isBlog={false}
                    title="Forter: Brand refresh"
                    description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                    link="https://github.com/soumyajit4419/Bits-0f-C0de"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={forter_element}
                    isBlog={false}
                    title="Forter: Forter Element for PSPs"
                    description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                    link="https://github.com/soumyajit4419/Editor.io"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={datadog_browsertestdemo}
                    isBlog={false}
                    title="Datadog: Browser Test Demo"
                    description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                    link="https://github.com/soumyajit4419/Plant_AI"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={datadog_synthetics}
                    isBlog={false}
                    title="Datadog: Datadog Synthetics Product Launch"
                    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                    link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                  />
                </Col>
              </Row>
            </Container>
            
          </Container>
      </CustomContainer>

    </section>
  );
}

const CustomContainer = styled.div`
  margin:0 10%;
  text-align:left;
  margin-top:10%;
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