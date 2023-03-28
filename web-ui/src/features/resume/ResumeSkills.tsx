import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectResume,
} from './resumeSlice';

import { Col, Container, Row } from "react-bootstrap";
import { ResumeData, SkillData } from './resumeModels';


export function ResumeSkills(props: { skills: SkillData[] }) {
    const resume = useAppSelector(selectResume);

    var set = new Set(props.skills.map(x => x.category!));

    return <>
        <h3>Skills</h3>
        {Array.from(set).map((data, index) => {
            var skills = props.skills.filter(x => x.category! == data);
            return <ResumeSkillsBlock skills={skills} key={index} category={data} />
        })}
    </>;
}

export function ResumeSkillsBlock(props: { category: string, skills: SkillData[] }) {
    return <Container>
        {props.category && (
            <Row>
                <Col>{props.category}</Col>
            </Row>
        )}
        <Row>
            <Col>{props.skills.map((data) => data.skill).join(", ")}</Col>
        </Row>
    </Container>
}