import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Image,
    Spacer,
} from "@chakra-ui/react";
export default function Navbar() {
    return (
        <Container
            position="sticky"
            top={0}
            bg="#17202a"
            mb={4}
            boxShadow="lg"
            centerContent
            maxW="100%"
            color="#262626"
        >
            <Flex
                width="80%"
                maxW="80%"
                py={4}
                minWidth="max-content"
                alignItems="center"
                gap="2"
            >
                <Box p="2">
                    <Image
                        boxSize="12"
                        src="https://play-lh.googleusercontent.com/edmBVFMS9fhuZycs2I6jCO7vGxhH434upOADR2e3x5Wi_s6Et4vcFY0gYs0q_B0qFS8"
                        alt="Banner"
                    />
                </Box>

                <Spacer />

                <ButtonGroup gap="2">
                    <Button px={8} borderRadius={0} colorScheme="blue" color="#fff">
                        Sign Up
                    </Button>

                    <Button px={8} colorScheme="teal" borderRadius={0}>
                        Log in
                    </Button>
                </ButtonGroup>
            </Flex>
        </Container>
    );
}
