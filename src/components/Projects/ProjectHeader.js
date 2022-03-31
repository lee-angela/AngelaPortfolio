import styled from "@emotion/styled";


export default function ProjectHeader({
    projectTitle,
    projectIntro,
    projectHeaderImg
}) {
    return (
        <CustomContainer>
            <ProjectTitleContainer>
                <ProjectTitle>
                    {projectTitle}
                </ProjectTitle>
                <ProjectIntro>
                    {projectIntro}
                </ProjectIntro>
            </ProjectTitleContainer>
            <ProjectHeaderImgContainer>
                <HeaderImg src={projectHeaderImg} />
            </ProjectHeaderImgContainer>
        </CustomContainer>
    );
}

const CustomContainer = styled.div`
    display:flex;
    margin:10% 10%;
    gap:40px;
    margin:
`;
const ProjectTitleContainer = styled.div`
    width:50%;
    flex-grow:1;
    text-align:left;
`;
const ProjectHeaderImgContainer = styled.div`
    width:50%;
    flex-grow:1;
`;
const ProjectTitle = styled.h1`
    font-family:'Space Mono', monospace;
    margin-bottom:80px;
`;

const HeaderImg = styled.img`
    max-width:100%;
`;

const ProjectIntro = styled.h1`
    font-family: 'Spartan', sans-serif;
    font-size:23px;
    letter-spacing: -1px;
`;