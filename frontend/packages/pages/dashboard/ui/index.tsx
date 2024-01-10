import './style.scss';
import React from 'react';
import { Styles, Wrapper } from '@zocom/wrapper';
import { DashboardContainer } from '@zocom/dashboard-container';
import { DashboardColumn, Status } from '@zocom/dashboard-container__column';

export const DashboardPage = () => {

  return (
    <Wrapper style={Styles.TABLET}>
        <DashboardContainer>
            <DashboardColumn status={Status.Ongoing}>
                <p>kort</p>
            </DashboardColumn>
            <DashboardColumn status={Status.Done}>
                <p>kort</p>
            </DashboardColumn>
        </DashboardContainer>
    </Wrapper>
  );
};