import ProjectHeader from "./ProjectHeader";
import ProjectSignificantAndGoals from "./ProjectSignificantAndGoals"
import styled from "@emotion/styled";
import headerimg from "../../Assets/Projects/forter_networkandcustomerpage.png";

export default function ForterSalesFeedbackLoop ({

}) {
    return (
        <div>
            <ProjectHeader
                projectTitle="ESTABLISHING A FEEDBACK LOOP AND STRONG INTERNAL DOCUMENTATION"
                projectIntro="Established the first official feedback loop with Forter's sales team through win/loss interviews that became commonplace across the organization."
                projectHeaderImg={headerimg}    
            />

            <ProjectSignificantAndGoals
                significance="This product launch was revolutionary to the company."
                goals1="reach revenue target"
                goals2="other goal"
                goals3="branding"
            />

        </div>
    );
}