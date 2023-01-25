import React from 'react';
import { useParams} from "react-router-dom";
import {datas, projects} from "../../../constants/constants.js";
import {Section, SectionDivider, SectionTitle} from "../../../styles/GlobalComponents/index.js";
import {MainDiv} from "../../Hero/Courses/CoursesStyled.js";
import CardContainer from "../../Hero/Courses/Card/CardContainer.jsx";

const SearchPage = () => {



    const { term } = useParams();


    return (

        <Section>
            <SectionDivider colorAlt />
            <SectionTitle>{term}</SectionTitle>


            <MainDiv>
                {projects.map((project, index) => {
                    return <CardContainer key={index} {...project} />;
                })}
            </MainDiv>

        </Section>
    );
};

export default SearchPage;