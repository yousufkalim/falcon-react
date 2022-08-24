// Init
import { Grid } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';
import WorkProcessSteps from './WorkProcessSteps';
// Importing Components

// Home Component
export default function WorkProcessSection(props) {
  return (
    <div
      style={{
        backgroundColor: '#003B7E',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: "center",
        justifyContent: 'center',
      }}
    >
      <SectionHeader
        WorkProcess
        SectionHeaderMargin
        width='5%'
        h1='We always follow the standard work process'
        decription="We solve clients' projects in a simple & efficient way"
      />

      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '4% 0%',
        }}
      >
        {props.UxWorkProcess ? (
          <Grid container spacing={1} sx={{ width: '85%' }}>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step1.svg`}
                title='UX'
                desp='We do ux research before we start any projects'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step2.svg`}
                title='Wireframing'
                desp='Then Wireframing according to requirements'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step3.svg`}
                title='UI Design'
                desp="Designed according to client's requirements"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step4.svg`}
                title='Design Review'
                desp='After completing the work, live test is done'
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={1} sx={{ width: '85%' }}>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step1.svg`}
                title='Project Requirement'
                desp='We do research and validate the specs before we start any projects'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step2.svg`}
                title='Designing'
                desp="Designed according to client's requirements"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step3.svg`}
                title='Development'
                desp='Developed by skilled team developers'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/step4.svg`}
                title='Live Testing'
                desp='After completing the work, live test is done'
              />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
