'use client';

import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';

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
  height: 450px;
  width: 1110px;
  margin: auto;
  background-color: var(--PrimaryDarkdesaturatedblue);
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  box-sizing: border-box;
  width: 50%;
  color: var(--NeutralWhite);
  padding: 50px 70px 50px 70px;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  width: 50%;
  background-image: url('/images/image-header-desktop.jpg');
  background-blend-mode: multiply;
  background-color: var(--PrimarySoftviolet);
  background-repeat: no-repeat;
  background-size: cover;
`;
const H1 = styled.h1`
  font-size: 34px;
  margin-bottom: 10px;
`;
const P = styled.p`
  color: var(--NeutralWhiteSlightlyMain);
  line-height: 28px;
  font-size: 16px;
`;
const Div = styled.div``;
const Span = styled.span`
  color: var(--PrimarySoftviolet);
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hi</title>
      </Head>
      <Main>
        <Card>
          <Left>
            <H1>
              Get <Span>insights</Span> that help your business grow.
            </H1>
            <P>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </P>
            <Div>10k+ companies 314 templates 12m+ queries</Div>
          </Left>
          <Right></Right>
        </Card>
      </Main>
    </>
  );
}
