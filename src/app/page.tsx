'use client';

import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';

import { inter, LexendDeca } from '@/constant/font';
import { devices } from '@/constant/theme';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
const Main = styled.main`
  background-color: var(--PrimaryVerydarkblue);
  min-height: 100vh;
  display: flex;
`;
const Card = styled.section`
  background-color: var(--PrimaryDarkdesaturatedblue);
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  @media screen and ${devices.sm} {
    flex-direction: column-reverse;
    height: auto;
    /* padding: 2rem; */
    /* padding-top: 6rem; */
    width: 100%;
    margin: 2rem;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  @media screen and ${devices.md} {
    flex-direction: row;
    height: 450px;
    width: 1110px;
    padding: 0px;
    margin: auto;
  }
`;
const Left = styled.div`
  box-sizing: border-box;

  color: var(--NeutralWhite);

  display: flex;
  flex-direction: column;
  @media screen and ${devices.sm} {
    width: 100%;
    padding: 10px 20px 10px 20px;
    text-align: center;
  }
  @media screen and ${devices.md} {
    width: 50%;
    padding: 50px 70px 50px 70px;
  }
`;
const Right = styled.div`
  background-image: url('/images/image-header-desktop.jpg');
  background-blend-mode: multiply;
  background-color: var(--PrimarySoftviolet);
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and ${devices.sm} {
    width: 100%;
    height: 14rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  @media screen and ${devices.md} {
    width: 50%;
    height: 100%;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 1rem;
  }
`;
const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  @media screen and ${devices.sm} {
    text-align: center;
  }
  @media screen and ${devices.md} {
    text-align: left;
  }
`;
const P = styled.p`
  color: var(--NeutralWhiteSlightlyMain2);
  line-height: 28px;
  font-size: 16px;

  @media screen and ${devices.sm} {
    text-align: center;
  }
  @media screen and ${devices.md} {
    text-align: left;
  }
`;
const Div = styled.div`
  display: flex;
  @media screen and ${devices.sm} {
    flex-direction: column;
    justify-items: center;
  }
  @media screen and ${devices.md} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3rem;
  }
`;
const Span = styled.span`
  color: var(--PrimarySoftviolet);
`;
const NumPanel = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${devices.sm} {
    width: 100%;
  }
  @media screen and ${devices.md} {
    width: 30%;
    text-align: left;
  }
`;
const H3Warp = styled.div`
  font-size: 25px;
  margin-bottom: 0px;
  font-weight: 600;
`;
const Pwarp = styled.p`
  color: var(--NeutralWhiteSlightlyMain2);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  vertical-align: top;
`;
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hi</title>
      </Head>
      <Main className={inter.className}>
        <Card>
          <Left>
            <H1>
              Get <Span>insights</Span> that help your business grow.
            </H1>
            <P>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </P>
            <Div>
              <NumPanel>
                <H3Warp>10k+</H3Warp>
                <Pwarp className={LexendDeca.className}>companies</Pwarp>
              </NumPanel>
              <NumPanel>
                <H3Warp>314</H3Warp>
                <Pwarp className={LexendDeca.className}> templates</Pwarp>
              </NumPanel>
              <NumPanel>
                <H3Warp>12m+</H3Warp>
                <Pwarp className={LexendDeca.className}>queries</Pwarp>
              </NumPanel>
            </Div>
          </Left>
          <Right></Right>
        </Card>
      </Main>
    </>
  );
}
