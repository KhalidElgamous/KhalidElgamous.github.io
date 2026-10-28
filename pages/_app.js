
import Layout from '../components/layout';

import './style.css';

function Website({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Website;
