import Layout from '../components/layout';

import './globals.css';

function Portfolio({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Portfolio;
