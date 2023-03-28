import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectResume,
} from './resumeSlice';

import { Col, Container, Row } from "react-bootstrap";
import { ResumeData } from './resumeModels';


export function Resume(props: { resume: ResumeData }) {
    const resume = useAppSelector(selectResume);

    return <Container>
        <Row>
            <Col>{props.resume.personalDetails!.name}</Col>
        </Row>
        <Row>
            <Col>
                {props.resume.personalDetails!.address!.city}, 
                {props.resume.personalDetails!.address!.state}
                </Col>
        </Row>
    </Container>
}