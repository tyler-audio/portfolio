import Background from '../components/matter/Background.jsx';
import '../styles/app.css';

const myApp = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
      <Background />
    </>
  )
};

export default myApp;