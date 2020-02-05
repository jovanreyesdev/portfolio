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
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
