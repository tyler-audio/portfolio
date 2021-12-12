import Document, { Html, Head, Main, NextScript } from 'next/document';
import Title from '../components/Title.jsx';

class myDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="description" content="Tyler Jones Portfolio"/>
          <meta property="og:title" content="Tyler Jones Portfolio Site"/>
          <meta property="og:description" content="Checkout my portfolio website!"/>
          <meta property="og:image" content="/images/websiteimage.png"/>
          <meta property="og:type" content="Website" />
          <meta property="og:author" content="Tyler Jones"/>
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