
import Layout from '../components/layouts/main';

import './style.css';

function Website({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Website;
