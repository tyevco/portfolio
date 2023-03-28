import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectResume,
} from './resumeSlice';

import { Col, Container, Row } from "react-bootstrap";
import { EducationData, ResumeData, SkillData, WorkExperienceData } from './resumeModels';


export function ResumeEducation(props: { education: EducationData[] }) {
    const resume = useAppSelector(selectResume);

    return <>
        <h3>Education</h3>
        {props.education.map((data, index) => (
            <ResumeEducationBlock education={data} key={index} />
        ))}
    </>;
}

export function ResumeEducationBlock(props: { education: EducationData }) {

    return <Container>
        <Row>
            <Col>{props.education.school} - {props.education.field}</Col>
            <Col><>{props.education.startDate}{props.education.endDate && (<>{' - '}{props.education.endDate}</>)}</></Col>
        </Row>
    </Container>
}