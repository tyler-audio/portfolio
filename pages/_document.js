import Document, { Html, Head, Main, NextScript } from 'next/document';
import Title from '../components/Title.jsx';

class myDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="description" content="Tyler Jones Portfolio"/>
          <link rel="shortcut icon" type="image/png" href="/images/favicon.png"/>
        </Head>
        <body>
          <Title />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default myDocument;