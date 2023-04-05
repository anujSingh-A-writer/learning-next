import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{
        background: 'white',
        color: 'black',
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}