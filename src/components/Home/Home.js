import React from "react";
import styled from "@emotion/styled";

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
import forter_customers from "../../Assets/Projects/forter_networkandcustomerpage.png"


export default function Home() {

  const [prodDevFilterState, setProdDevFilterState] = React.useState(true);
  const [gtmFilterState, setGtmFilterState] = React.useState(true);
  const [engFilterState, setEngFilterState] = React.useState(true);
  const [marketingFilterState, setMarketingFilterState] = React.useState(true);
  const [salesFilterState, setSalesFilterState] = React.useState(true);
  const [designFilterState, setDesignFilterState] = React.useState(true);

  const [forterFilterState, setForterFilterState] = React.useState(true);
  const [datadogFilterState, setDatadogFilterState] = React.useState(true);
  const [progressaryFilterState, setProgressaryFilterState] = React.useState(true);
  const [waFilterState, setWaFilterState] = React.useState(false);

  //obj of all projects and their tags (as if pulled from DB)
  let projectFilters = [
    {
      "projectId":"forter-forterelement",
      "tags":["PRODUCT DEVELOPMENT STRATEGY", "GO-TO-MARKET STRATEGY", "ENGINEERING", "MARKETING", "SALES", "DESIGN"],
      "title":"FORTER: FORTER ELEMENT FOR PSPs",
      "description":"Launched Forter's core, fraud-prevention software-as-a-service for a new, one-to-many distribution channel.",
      "imgPath":`${forter_element}`,
      "display":"true"
    },
    {
      "projectId":"forter-newwebsite",
      "tags":["GO-TO-MARKET STRATEGY", "ENGINEERING", "MARKETING", "SALES", "DESIGN"],
      "title":"FORTER: WEBSITE AND BRAND REFRESH",
      "description":"My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      "imgPath":`${forter_newbrand}`,
      "display":"true"
    },
    {
      "projectId":"forter-salesfeedbackloop",
      "tags":["GO-TO-MARKET STRATEGY", "MARKETING", "SALES"],
      "title":"FORTER: SALES FEEDBACK LOOP AND INTERNAL DOCUMENTATION",
      "description":"Established the first official feedback loop with Forter's sales team through win/loss interviews that became commonplace across the organization.",
      "imgPath":`${forter_customers}`,
      "display":"true"
    },
    {
      "projectId":"forter-productpackaging",
      "tags":["GO-TO-MARKET STRATEGY", "MARKETING", "SALES"],
      "title":"FORTER: PRODUCT PACKAGING",
      "description":"Strategized packaging, bundling, and naming of products to expand and best represent the scope of Forter's offerings.",
      "imgPath":`${forter_packaging}`,
      "display":"true"
    },
    {
      "projectId":"datadog-synthetics",
      "tags":["PRODUCT DEVELOPMENT STRATEGY", "GO-TO-MARKET STRATEGY", "ENGINEERING", "MARKETING", "SALES", "DESIGN"],
      "title":"DATADOG: DATADOG SYNTHETICS PRODUCT LAUNCH",
      "description":"Launched the last product before Datadog's IPO in 2019. Product was geared towards a new, front-end developer audience – new strategy, messaging, content, and training was needed.",
      "imgPath":`${datadog_synthetics}`,
      "display":"true"
    },
    {
      "projectId":"datadog-browsertestdemo",
      "tags":["PRODUCT DEVELOPMENT STRATEGY", "GO-TO-MARKET STRATEGY", "ENGINEERING", "MARKETING", "SALES", "DESIGN"],
      "title":"DATADOG: BROWSER TEST DEMO",
      "description":"Collaborated with Datadog's engineering team to create and maintain a new customer-facing demo site for the new Browser Testing product.",
      "imgPath":`${datadog_browsertestdemo}`,
      "display":"true"
    },
  ];

  return (
    <section>
      <CustomContainer>
          <Row>
            <Col md={7} className="home-header">
              <Mainheader>
                TECHNICAL PRODUCT STRATEGIST
              </Mainheader>
              <HeadingDescription>
                Hi, I’m Angela. Previously @ Apple, Datadog, and Forter. I'm an active coder, designer, and entrepreneur – I currently specialize in product strategy at hyper-scaling SaaS organizations.
              </HeadingDescription>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={ellipse2}
                alt="home pic"
                className="img-fluid"
                style={{ "width": "800px", "position":"absolute", "right": "-20%", "zIndex": "-1"}}
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

            forterFilterState={forterFilterState}
            setForterFilterState={setForterFilterState}
            datadogFilterState={datadogFilterState}
            setDatadogFilterState={setDatadogFilterState}
            progressaryFilterState={progressaryFilterState}
            setProgressaryFilterState={setProgressaryFilterState}
            waFilterState={waFilterState}
            setWaFilterState={setWaFilterState}
          />

          <ProjectCardContainer>
            {projectFilters.map((project, i) => (
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                link={`/${project.projectId}`}
                tags={project.tags}
              />
            ))}
          </ProjectCardContainer>
            
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

const ProjectCardContainer = styled.div`
  margin:100px 0;
  display:flex;
  flex-wrap:wrap;
`;