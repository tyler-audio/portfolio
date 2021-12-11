import Head from 'next/head';
import Background from '../components/matter/Background.jsx';
import '../styles/app.css';

const myApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Tyler Jones</title>
      </Head>
      <Component {...pageProps} />
      {/* <Background /> */}
    </>
  )
};

export default myApp;