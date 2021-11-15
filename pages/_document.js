import Document, { Html, Head, Main, NextScript } from 'next/document';

class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
          <link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,400;1,600&display=swap" rel="stylesheet"/>
          <script src="/decomp.min.js" type="text/javascript"></script>
          <script src="/pathseg.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default myDocument;