import React from 'react';
import {
  Html, Head, Main,
  NextScript,
} from 'next/document';

const Document = () => {
  Document.getInitialProps = async (ctx) => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  };

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
