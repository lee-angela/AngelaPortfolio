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
    setDesignFilterState,

    forterFilterState,
    setForterFilterState,
    datadogFilterState,
    setDatadogFilterState,
    progressaryFilterState,
    setProgressaryFilterState,
    waFilterState,
    setWaFilterState
}) {

    function selectAllCategories() {
        setProdDevFilterState(true);
        setGtmFilterState(true);
        setEngFilterState(true);
        setMarketingFilterState(true);
        setSalesFilterState(true);
        setDesignFilterState(true);
    }
    function clearAllCategories() {
        setProdDevFilterState(false);
        setGtmFilterState(false);
        setEngFilterState(false);
        setMarketingFilterState(false);
        setSalesFilterState(false);
        setDesignFilterState(false);
    }

    function selectAllCompanies() {
        setForterFilterState(true);
        setDatadogFilterState(true);
        setProgressaryFilterState(true);
        setWaFilterState(true);
    }
    function clearAllCompanies() {
        setForterFilterState(true);
        setDatadogFilterState(true);
        setProgressaryFilterState(true);
        setWaFilterState(true);
    }

    return (
        <FilterContainer>
            <CategoryFilterContainer>
                <FilterHeader>
                    <LeftHeader>FILTER WORK BY CATEGORY</LeftHeader>
                    <RightActionContainer>
                        <RightActions
                            onClick={selectAllCategories}>
                            SELECT ALL
                        </RightActions>
                        <RightActions
                            onClick={clearAllCategories}>
                            CLEAR ALL
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
                    displayText="GO-TO-MARKET STRATEGY"
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
            </CategoryFilterContainer>
            
            <CompanyFilterContainer>
                <FilterHeader>
                    <LeftHeader>FILTER WORK BY COMPANY</LeftHeader>
                </FilterHeader>

                <FilterPill 
                    id="product_development"
                    currState={forterFilterState}
                    callbackFunc={setForterFilterState}
                    displayText="FORTER"
                    className={forterFilterState ? "selected" : ""} />
                <FilterPill 
                    id="product_development"
                    currState={datadogFilterState}
                    callbackFunc={setDatadogFilterState}
                    displayText="DATADOG"
                    className={datadogFilterState ? "selected" : ""} />
                <FilterPill 
                    id="product_development"
                    currState={progressaryFilterState}
                    callbackFunc={setProgressaryFilterState}
                    displayText="PROGRESSARY"
                    className={progressaryFilterState ? "selected" : ""} />
                <FilterPill 
                    id="product_development"
                    currState={waFilterState}
                    callbackFunc={setWaFilterState}
                    displayText="WINE AWESOMENESS"
                    className={waFilterState ? "selected" : ""} />
            </CompanyFilterContainer>
        </FilterContainer>
    );
}
const FilterContainer = styled.div`
    display:flex;
    align-items: flex-start;
    align-content:flex-start;
    margin-top:50px;
    gap:70px;
`;
const FilterHeader = styled.div`
    display:block;
    font-family:'Space Mono', monospace;
    margin-bottom:20px;
`;
const CategoryFilterContainer = styled.div`
    text-align:left;
    flex-grow:1;
    width:65%;
`;
const CompanyFilterContainer = styled.div`
    flex-grow:1;
    width:35%;
    padding-left:40px;
    border-left:2px solid #f0f0f0;
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

