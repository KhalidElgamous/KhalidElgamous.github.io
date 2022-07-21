import Head from "next/head";
import {Box,Container} from "@chakra-ui/react";

import Navbar from '../navbar.js';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pd={8}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Khalid Elgamous</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main