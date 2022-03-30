import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "@emotion/styled";
import WorkFiltersCss from "./WorkFilters.css";
import FilterPill from "./FilterPill";

export default function WorkFilters({
    prodDevFilterState,
    setProdDevFilterState,
    gtmFilterState,
    setGtmFilterState,
    engFilterState,
    setEngFilterState,
    marketingFilterState,
    setMarketingFilterState,
    salesFilterState,
    setSalesFilterState,
    designFilterState,
    setDesignFilterState
}) {

    function clearAll() {
        setProdDevFilterState(false);
        setGtmFilterState(false);
        setEngFilterState(false);
        setMarketingFilterState(false);
        setSalesFilterState(false);
        setDesignFilterState(false);
    }
    function selectAll() {
        setProdDevFilterState(true);
        setGtmFilterState(true);
        setEngFilterState(true);
        setMarketingFilterState(true);
        setSalesFilterState(true);
        setDesignFilterState(true);
    }

    return (
        <FilterContainer>
            <FilterHeader>
                <LeftHeader>FILTER WORK BY CATEGORY</LeftHeader>
                <RightActionContainer>
                    <RightActions
                        onClick={clearAll}>
                        CLEAR ALL
                    </RightActions>
                    <RightActions
                        onClick={selectAll}>
                        SELECT ALL
                    </RightActions>
                </RightActionContainer>
            </FilterHeader>

            <FilterPill 
                id="product_development"
                currState={prodDevFilterState}
                callbackFunc={setProdDevFilterState}
                displayText="PRODUCT DEVELOPMENT STRATEGY"
                className={prodDevFilterState ? "selected" : ""} />
            <FilterPill 
                currState={gtmFilterState}
                callbackFunc={setGtmFilterState}
                displayText="PRODUCT DEVELOPMENT STRATEGY"
                className={gtmFilterState ? "selected" : ""} />
            <FilterPill 
                currState={engFilterState}
                callbackFunc={setEngFilterState}
                displayText="ENGINEERING"
                className={engFilterState ? "selected" : ""} />
            <FilterPill 
                currState={marketingFilterState}
                callbackFunc={setMarketingFilterState}
                displayText="MARKETING"
                className={marketingFilterState ? "selected" : ""} />
            <FilterPill 
                currState={salesFilterState}
                callbackFunc={setSalesFilterState}
                displayText="SALES"
                className={salesFilterState ? "selected" : ""} />
            <FilterPill 
                currState={designFilterState}
                callbackFunc={setDesignFilterState}
                displayText="DESIGN + USER EXPERIENCE"
                className={designFilterState ? "selected" : ""} />
        </FilterContainer>
    );
}

const FilterHeader = styled.div`
    display:block;
    font-family:'Space Mono', monospace;
    margin-bottom:20px;
`;

const FilterContainer = styled.div`
    text-align:left;
    margin-top:50px;
    width:80%;
`;
const LeftHeader = styled.div`
    display:inline-block;
`;

const RightActionContainer = styled.div`
    float:right;
    right:0;
`;
const RightActions = styled.div`
    display:inline-block;
    margin-left:40px;
    right:0;
    transition: all 0.1s ease 0s;
    :hover{
        cursor:pointer;
        color:#0500FF;
        transition: all 0.1s ease 0s;
    }
`;

