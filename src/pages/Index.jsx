import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Grid, Link, Container, Stack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navegação */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="white" color="gray.600">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Queenslab
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Link href="#">Início</Link>
          <Link href="#">Sobre</Link>
          <Link href="#">Serviços</Link>
          <Link href="#">Portfólio</Link>
          <Link href="#">Contato</Link>
        </Stack>

        <Box display={{ base: "none", md: "block" }}>
          <Button colorScheme="teal">Fale Conosco</Button>
        </Box>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Transformando ideias em realidade digital
        </Heading>
        <Text color={"gray.500"} mb={6}>
          Somos uma agência digital especializada em desenvolvimento web e mobile.
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="outline">
          Saiba Mais
        </Button>
      </Box>

      {/* Serviços */}
      <Container maxW={"5xl"} py={12}>
        <Heading textAlign="center" mb={12}>
          Nossos Serviços
        </Heading>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
          <Box p={6} boxShadow={"2xl"} rounded={"md"} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGljb258ZW58MHx8fHwxNzEwODY2NzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" mx="auto" />
            <Heading as="h3" size="md" my={4}>
              Desenvolvimento Web
            </Heading>
            <Text>Criamos websites modernos, responsivos e de alta performance.</Text>
          </Box>
          <Box p={6} boxShadow={"2xl"} rounded={"md"} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpY29ufGVufDB8fHx8MTcxMDg2Njc0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mobile Apps" mx="auto" />
            <Heading as="h3" size="md" my={4}>
              Aplicativos Móveis
            </Heading>
            <Text>Desenvolvemos aplicativos nativos e híbridos para iOS e Android.</Text>
          </Box>
          <Box p={6} boxShadow={"2xl"} rounded={"md"} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMGljb258ZW58MHx8fHwxNzEwODY2NzQ3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="UX Design" mx="auto" />
            <Heading as="h3" size="md" my={4}>
              Design UX/UI
            </Heading>
            <Text>Projetamos interfaces intuitivas e experiências de usuário envolventes.</Text>
          </Box>
        </Grid>
      </Container>

      {/* Portfólio */}
      <Box bg="gray.100" py={20}>
        <Container maxW={"5xl"}>
          <Heading textAlign="center" mb={12}>
            Nosso Portfólio
          </Heading>
          <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            <Image src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTA4NjY3NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Website 1" borderRadius="lg" />
            <Image src="https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDg2Njc0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="App 1" borderRadius="lg" />
            <Image src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTA4NjY3NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Website 2" borderRadius="lg" />
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Pronto para começar seu projeto?
        </Heading>
        <Text color={"gray.500"} mb={6}>
          Entre em contato conosco e vamos discutir como podemos ajudar a impulsionar seu negócio.
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal">
          Fale Conosco
        </Button>
      </Box>

      {/* Rodapé */}
      <Box bg="gray.900" color="white" py={6} px={6} textAlign="center">
        <Text>© 2023 Queenslab. Todos os direitos reservados.</Text>
      </Box>
    </Box>
  );
};

export default Index;
