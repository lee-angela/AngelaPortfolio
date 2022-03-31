import ProjectHeader from "./ProjectHeader";
import ProjectSignificantAndGoals from "./ProjectSignificantAndGoals"
import styled from "@emotion/styled";
import headerimg from "../../Assets/Projects/forter_forterelement.png";


export default function ForterElement() {
    return (
        <div>
            <ProjectHeader
                projectTitle="LAUNCHING FORTER ELEMENT: FORTER'S OFFERING FOR PAYMENT SERVICE PROVIDERS"
                projectIntro="Launched Forter's core, fraud-prevention software-as-a-service for a new, one-to-many distribution channel."
                projectHeaderImg={headerimg}    
            />

            <ProjectSignificantAndGoals
                significance="This product launch was revolutionary to the company."
                goals1="reach revenue target"
                goals2="other goal"
                goals3="branding"
            />

        </div>
    )
}
