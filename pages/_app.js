import Head from 'next/head';
import '../styles/app.css';

const myApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Tyler Jones</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default myApp;