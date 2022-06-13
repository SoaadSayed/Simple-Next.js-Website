import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  useEffect(() => {

    import ('../node_modules/bootstrap/dist/js/bootstrap.min.js');

  }, []);

  return(
    
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
