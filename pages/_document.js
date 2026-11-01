import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    // __NEXT_DATA__?.props?.pageProps?.lang || 
    const lang = "en";
    return (
      <Html lang={lang}>
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}