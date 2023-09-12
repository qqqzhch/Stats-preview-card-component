'use client';
import React from 'react';
import { css, styled } from 'styled-components';

import { devices } from '@/constant/theme';

import { poppins } from '../../constant/font';

import IconCalculator from '~/images/icon-calculator.svg';
import IconIconKarma from '~/images/icon-karma.svg';
import IconSupervisor from '~/images/icon-supervisor.svg';
import IconTeamBuilder from '~/images/icon-team-builder.svg';

const page = () => {
  const MainWarp = styled.main`
    background-color: var(--NeutralVeryLightGray);
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    grid-gap: 10px;
    > div {
      /* justify-self: center; */

      text-align: center;
    }
  `;

  const SectionWarp = styled.div`
    display: grid;

    grid-auto-flow: column;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    margin-top: 60px;

    @media screen and ${devices.sm} {
      grid-template-rows: repeat(5, auto);
      grid-template-columns: 325px;
    }
    @media screen and ${devices.md} {
      grid-template-rows: repeat(5, 110px);
      grid-template-columns: 325px 325px 325px;
    }
  `;
  const Title = styled.div`
    font-size: 40px;
    font-weight: 100;
    margin-top: 90px;
    font-family: ${poppins.style.fontFamily};
  `;
  const Brif = styled.div`
    color: var(--NeutralGrayishBlue);
    line-height: 24px;
    @media screen and ${devices.sm} {
      width: 80%;
    }
    @media screen and ${devices.md} {
      width: 45%;
    }
    @media screen and ${devices.xl} {
      width: 35%;
    }
    @media screen and ${devices['2xl']} {
      width: 25%;
    }
  `;
  const SubTitle = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin: 0 0;
    margin-bottom: 10px;
  `;
  const Card = styled.div`
    border-top: 3px;
    border-top-style: solid;
    border-radius: 10px;

    box-shadow: 7px 6px 18px #dbd8d8;
    text-align: left;
    padding: 20px;
    height: 220px;
    box-sizing: border-box;
    position: relative;
    p {
      color: var(--NeutralGrayishBlue);
    }
  `;
  const Card1 = styled(Card)`
    border-top-color: var(--PrimaryCyan);
    @media screen and ${devices.sm} {
    }

    @media screen and ${devices.md} {
      grid-row-start: 2;
    }
  `;
  const Card2 = styled(Card)`
    border-top-color: var(--PrimaryRed);
    @media screen and ${devices.sm} {
    }

    @media screen and ${devices.md} {
      grid-row-start: 1;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  `;
  const Card3 = styled(Card)`
    border-top-color: var(--PrimaryOrange);
    @media screen and ${devices.md} {
      grid-row-start: 3;

      grid-column-start: 2;
      grid-column-end: 3;
    }
  `;
  const Card4 = styled(Card)`
    border-top-color: var(--PrimaryBlue);
    @media screen and ${devices.md} {
      grid-row-start: 2;
      grid-column-start: 3;
      grid-column-end: 4;
    }
  `;
  const CommonStyle = css`
    width: 80px;
    height: 80px;
    float: right;
    /* margin: 20px; */
    /* margin-top: 40px; */
    position: absolute;
    bottom: 0px;
    right: 20px;
  `;
  const IconSupervisorWarp = styled(IconSupervisor)`
    ${CommonStyle}
  `;
  const IconTeamBuilderWarp = styled(IconTeamBuilder)`
    ${CommonStyle}
    margin-bottom:10px;
  `;
  const IconKarmaWarp = styled(IconIconKarma)`
    ${CommonStyle}
  `;
  const IconCalculatorWarp = styled(IconCalculator)`
    ${CommonStyle}
  `;
  const CardTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
  `;

  return (
    <MainWarp>
      <Title>Reliable, efficient delivery</Title>
      <SubTitle>Powered by Technology</SubTitle>
      <Brif>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Brif>
      <SectionWarp>
        <Card1>
          <CardTitle>Supervisor</CardTitle>
          <p>Monitors activity to identify project roadblocks</p>
          <IconSupervisorWarp></IconSupervisorWarp>
        </Card1>
        <Card2>
          <CardTitle>Team Builder</CardTitle>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <IconTeamBuilderWarp></IconTeamBuilderWarp>
        </Card2>
        <Card3>
          <CardTitle>Karma</CardTitle>
          <p>Regularly evaluates our talent to ensure quality</p>
          <IconKarmaWarp></IconKarmaWarp>
        </Card3>
        <Card4>
          <CardTitle>Calculator</CardTitle>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <IconCalculatorWarp></IconCalculatorWarp>
        </Card4>
      </SectionWarp>
    </MainWarp>
  );
};

export default page;
