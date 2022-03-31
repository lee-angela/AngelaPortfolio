import ProjectHeader from "./ProjectHeader";
import ProjectSignificantAndGoals from "./ProjectSignificantAndGoals"
import styled from "@emotion/styled";
import headerimg from "../../Assets/Projects/forter_newbrand_homepage.png";

export default function ForterNewWebsite({

}) {
    return (
        <div>
            <ProjectHeader
                projectTitle="CREATING AND LAUNCHING FORTER'S NEW WEBSITE AND BRAND"
                projectIntro="In collaboration with design, marketing, partner, and sales teams, the product marketing team was responsible for creating and launching a brand new website."
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