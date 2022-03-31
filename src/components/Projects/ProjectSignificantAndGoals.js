import styled from "@emotion/styled";

export default function ProjectSignificantAndGoals ({
    significance,
    goals1,
    goals2,
    goals3
}) {

    return (
        <CustomContainer>
            <GoalsContainer>
                <GoalsHeader>
                    SIGNIFICANCE
                </GoalsHeader>
                <GoalsContent>
                    {significance}
                </GoalsContent>
            </GoalsContainer>

            <GoalsContainer>
                <GoalsHeader>GOALS</GoalsHeader>
                <GoalsContent>
                    <p>There were several goals and KPIs we had in mind when launching this product to market.</p>
                    <ul>
                        <li>{goals1}</li>
                        <li>{goals2}</li>
                        <li>{goals3}</li>
                    </ul>
                </GoalsContent>
            </GoalsContainer>
        </CustomContainer>

    );
}

const CustomContainer = styled.div`
    text-align:left;
    margin:0 10% 10%;
    font-family:'Spartan', sans-serif;
`;

const GoalsContainer = styled.div`
    display:flex;
    margin-bottom:40px;
`;
const GoalsHeader = styled.h4`
    font-family:'Space Mono', monospace;
    font-size: 18px;
    width:20%;
`;
const GoalsContent = styled.div`
    width:80%;
`;