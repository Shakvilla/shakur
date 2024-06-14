import '../styles/globals.css'

import { Fira_Code } from 'next/font/google'
const fira = Fira_Code({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return <main className={fira.className}>
 
    <Component {...pageProps} />
  </main>
}

export default MyApp
