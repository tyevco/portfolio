import React, { useState } from 'react';

import { Col, Container, Row } from "react-bootstrap";
import { ResumeData } from './resumeModels';
import { ResumeSkills } from './ResumeSkills';
import { ResumeWorkExperience } from './ResumeWorkExperience';
import { ResumeEducation } from './ResumeEducation';

export function Resume(props: { resume: ResumeData }) {

    return <Container>
        <Row>
            <Col>{props.resume.personalDetails!.name}</Col>
        </Row>
        {props.resume.personalDetails!.address && (
            <Row>
                <Col>
                    {props.resume.personalDetails!.address!.city}{', '}
                    {props.resume.personalDetails!.address!.state}
                </Col>
            </Row>
        )}
        <Row>
            <Col>
                {props.resume.personalDetails!.phone} | {props.resume.personalDetails!.email} | {props.resume.personalDetails!.linkedIn}
            </Col>
        </Row>
        {props.resume.qualifications && (
            <Row>
                <Col>
                    <h3>Qualifications</h3>
                    {props.resume.qualifications}
                </Col>
            </Row>
        )}
        {props.resume.skills && (
            <Row>
                <Col>
                    <ResumeSkills skills={props.resume.skills} />
                </Col>
            </Row>
        )}
        {props.resume.workExperience && (
            <Row>
                <Col>
                    <ResumeWorkExperience workExperience={props.resume.workExperience} />
                </Col>
            </Row>
        )}
        {props.resume.education && (
            <Row>
                <Col>
                    <ResumeEducation education={props.resume.education} />
                </Col>
            </Row>
        )}
    </Container>
}