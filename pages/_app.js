import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}

export default MyApp
