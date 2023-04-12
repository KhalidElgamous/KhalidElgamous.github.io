import Head from "next/head";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <title>Khalid Elgamous</title>
      </Head>
      {children}
    </>
  )
}

export default Main