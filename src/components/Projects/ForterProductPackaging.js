import ProjectHeader from "./ProjectHeader";
import ProjectSignificantAndGoals from "./ProjectSignificantAndGoals"
import styled from "@emotion/styled";
import headerimg from "../../Assets/Projects/forter_packaging.png";


export default function ForterProductPackaging ({

}) {
    return (
        <div>
            <ProjectHeader
                projectTitle="REORGANIZING AND NAMING FORTER'S PRODUCT SUITE"
                projectIntro="Strategized packaging, bundling, and naming of products to expand and best represent the scope of Forter's offerings."
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