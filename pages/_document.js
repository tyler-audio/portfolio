import Document, { Html, Head, Main, NextScript } from 'next/document';
import Title from '../components/Title.jsx';

class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> */}
          <link onLoad href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,400;1,600&display=swap" rel="stylesheet"/>
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