import Navbar from '../components/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp



// 1. dodajemo <> </> kao roditelj div
// 2. dodajemo Navbar komponentu