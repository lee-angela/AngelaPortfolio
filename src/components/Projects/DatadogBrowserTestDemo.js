import ProjectHeader from "./ProjectHeader";
import ProjectSignificantAndGoals from "./ProjectSignificantAndGoals"
import styled from "@emotion/styled";
import headerimg from "../../Assets/Projects/datadog_browsertestdemo.png";

export default function DatadogBrowserTestDemo ({

}) {

    return (
        <div>
            <ProjectHeader
                projectTitle="DEVELOPING DATADOG'S BROWSER TEST DEMO"
                projectIntro="Collaborated with Datadog's engineering team to create and maintain a new customer-facing demo site for the new Browser Testing product."
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