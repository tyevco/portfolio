import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectResume,
} from './resumeSlice';

import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { ResumeData, SkillData, WorkExperienceData } from './resumeModels';


export function ResumeWorkExperience(props: { workExperience: WorkExperienceData[] }) {
    const resume = useAppSelector(selectResume);

    return <>
        <h3>Professional Experience</h3>
        {props.workExperience.map((data, index) => (
            <ResumeWorkExperienceBlock experience={data} key={index} />
        ))}
    </>;
}

export function ResumeWorkExperienceBlock(props: { experience: WorkExperienceData }) {

    return <Container>
        <Row>
            <Col>{props.experience.company.name}</Col>
            <Col>{props.experience.company.location}</Col>
        </Row>

        <Row>
            <Col>{props.experience.title}</Col>
            <Col><>
                {props.experience.startDate}
                {' - '}
                {!props.experience.endDate && (
                    <>{'Present'}</>
                )}
                {props.experience.endDate && (
                    <>{props.experience.endDate}</>
                )}
            </></Col>
        </Row>
        <Row>
            <Col>
                {typeof props.experience.description === 'string' && (
                    <>{props.experience.description}</>
                )}

                {typeof props.experience.description !== 'string' && (
                    <ListGroup variant="flush">
                        {props.experience.description.map((data, index) => (
                            <ListGroup.Item key={index}>{data}</ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
        </Row>
    </Container>;
}