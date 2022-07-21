import Head from "next/head";
import {Box,Container} from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box as="main" pd={8}>
      <Head>
        <title>Khalid !</title>
      </Head>
      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main