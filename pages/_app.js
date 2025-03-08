import "../styles/globals.css";
import Layout from "components/layout/Layout";
import { Roboto } from 'next/font/google';
 
const rubik = Roboto({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: '400'
})



function MyApp({ Component, pageProps }) {
  return (
    <main  className={`${rubik.variable} font-sans`}>
    <Layout>

      <Component {...pageProps} />

    </Layout>
    </main>
  )
}

export default MyApp
