import Head from 'next/head';
import '../styles/app.css';

const myApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Tyler Jones</title>
        <meta property="og:image" content="/images/websiteimage.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default myApp;