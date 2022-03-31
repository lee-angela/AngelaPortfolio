import ProjectHeader from "./ProjectHeader";
import ProjectSignificantAndGoals from "./ProjectSignificantAndGoals"
import styled from "@emotion/styled";
import headerimg from "../../Assets/Projects/datadog_synthetics.png";

export default function DatadogSynthetics ({

}){
    return (
        <div>
            <ProjectHeader
                projectTitle="LAUNCHING DATADOG SYNTHETICS: THE COMPANY'S FIRST PRODUCT FOR FRONT-END DEVS"
                projectIntro="Launched the last product before Datadog's IPO in 2019. Product was geared towards a new, front-end developer audience – new strategy, messaging, content, and training was needed."
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