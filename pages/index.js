
import { Box, Container, Heading } from "@chakra-ui/react";


const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align="center">
        Hello, I&apos;m a data scientist based in Morocco
      </Box>
      <Box display={{md: 'flex'}}></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Khalid ELGAMOUS
        </Heading>
      </Box>
    </Container>
  )
}

export default Page;
