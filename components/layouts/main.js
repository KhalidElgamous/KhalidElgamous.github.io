import Head from "next/head";
import {Box,Container} from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pd={8}>
      <Head>
        <title>Khalid EL GAMOUS</title>
      </Head>
      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main