import React from 'react';
import { useParams} from "react-router-dom";
import {datas, projects} from "../../../constants/constants.js";
import {Section, SectionDivider, SectionTitle} from "../../../styles/GlobalComponents/index.js";
import {MainDiv} from "../../Hero/Courses/CoursesStyled.js";
import CardContainer from "../../Hero/Courses/Card/CardContainer.jsx";

const SkillPage = () => {



    const { id } = useParams();

    const data = datas.filter(data=> data.id===parseInt(id))

    return (

        <Section>
            <SectionDivider colorAlt />
            <SectionTitle>{data[0].text}</SectionTitle>


    <MainDiv>
        {projects.map((project, index) => {
            return <CardContainer key={index} {...project} />;
        })}
    </MainDiv>

        </Section>
    );
};

export default SkillPage;