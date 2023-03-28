import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  loadAsync,
  selectResume,
  selectStatus
} from './resumeSlice';

import { useForm, Controller } from "react-hook-form";

import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Resume } from './Resume';

//import styles from './Resume.module.css';

export function ResumeView() {
  const resume = useAppSelector(selectResume);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      resumeId: '',
    }
  });
  const onSubmit = (data: any) => dispatch(loadAsync(data.resumeId));

  return <>
    {resume === undefined && (
      <>
        {status === 'idle' && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="resumeId"
              control={control}
              render={({ field }) => <Form.Group>
                <Form.Label htmlFor="resumeId">Resume Id</Form.Label>
                <Form.Control {...field} />
              </Form.Group>}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
        {status === 'loading' && (
          <>Loading resume.</>
        )}
        {status === 'failed' && (
          <>Error retrieving data.</>
        )}
      </>
    )}

    {resume !== undefined && (
      <>
        {status === 'idle' && (
          <Resume resume={resume} />
        )}
        {status === 'loading' && (
          <>Weird state.</>
        )}
        {status === 'failed' && (
          <>Weird state.</>
        )}
      </>
    )}
  </>;
}