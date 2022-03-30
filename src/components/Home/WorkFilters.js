import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "@emotion/styled";
import WorkFiltersCss from "./WorkFilters.css";

export default function WorkFilters({
    callbackFunc,
    selectedFilters
}) {

    function handleClick() {
        console.log("clicked");
        callbackFunc();
    }
    return (
        <FilterContainer>
            <FilterHeader>
                FILTER WORK BY CATEGORY
            </FilterHeader>

            <FilterPill 
                onClick={handleClick}
                className={selectedFilters.product_development ? "selected" : ""}>
                PRODUCT DEVELOPMENT STRATEGY
            </FilterPill>
            <FilterPill 
                onClick={handleClick}
                className={selectedFilters.product_development ? "selected" : ""}>
                GO-TO-MARKET STRATEGY
            </FilterPill>
            <FilterPill 
                onClick={handleClick}
                className={selectedFilters.product_development ? "selected" : ""}>
                ENGINEERING
            </FilterPill>
            <FilterPill 
                onClick={handleClick}
                className={selectedFilters.product_development ? "selected" : ""}>
                MARKETING 
            </FilterPill>
            <FilterPill 
                onClick={handleClick}
                className={selectedFilters.product_development ? "selected" : ""}>  
                SALES
            </FilterPill>
            <FilterPill 
                onClick={handleClick}
                className={selectedFilters.product_development ? "selected" : ""}>
                DESIGN + USER EXPERIENCE
            </FilterPill>
        </FilterContainer>
    );
}

const FilterHeader = styled.div`
    font-family:'Space Mono', monospace;
`;

const FilterContainer = styled.div`
    text-align:left;
    margin-top:50px;
    width:80%;
`;

const FilterPill = styled.div`
    font-family: 'Space Mono', monospace;
    border-radius:20px;
    display:inline-block;
    padding:5px 25px;
    margin:10px 20px 10px 0;
    border:2px solid black;
    box-sizing: border-box;
    transition: all 0.1s ease 0s;
    :hover {
        cursor:pointer;
        background-color:#FFAF52;
        border:2px solid #FFAF52;
        transition: all 0.1s ease 0s;

    }
`;