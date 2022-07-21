
import { Box, Heading } from "@chakra-ui/react";


const Page = () => {
  return (
    <>
      <Box borderRadius="lg" p={3} mb={6} align="center">
        Hello, I&apos;m a data scientist based in Morocco
      </Box>
      <Box display={{md: 'flex'}}></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Khalid ELGAMOUS
        </Heading>
      </Box>
    </>
  )
}

export default Page;
