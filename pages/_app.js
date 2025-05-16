import "@/styles/globals.css";
//INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";


const MyApp = ({ Component, pageProps }) => (   //  converting to arrow

  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>

)

export default MyApp;