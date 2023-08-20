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
  background-color: green;
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hi</title>
      </Head>
      <Main>
        Get insights that help your business grow. Discover the benefits of data
        analytics and make better decisions regarding revenue, customer
        experience, and overall efficiency. 10k+ companies 314 templates 12m+
        queries
      </Main>
    </>
  );
}
