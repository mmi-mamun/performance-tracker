import { EmailIcon } from "@chakra-ui/icons";
import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Container maxW="100%" centerContent background="#212f3d">
            <Flex
                width="80%"
                maxW="80%"
                py={4}
                minWidth="max-content"
                alignItems="center"
                gap="2"
                justifyContent="space-between"
            >
                <Box p="2">
                    <Image
                        maxW={120}
                        src="https://play-lh.googleusercontent.com/edmBVFMS9fhuZycs2I6jCO7vGxhH434upOADR2e3x5Wi_s6Et4vcFY0gYs0q_B0qFS8"
                        alt="Banner"
                    />
                </Box>
                <Box color="#fff" maxW="400px">
                    <Text color="tomato" fontWeight="600">
                        Office Address
                        <Divider />
                    </Text>
                    <Text>
                        Level-4, 34, Awal Centre, Banani,
                        <Divider />
                        Dhaka Support: web@programming-hero.com <Divider />
                        Helpline: 01322810867, 01322810873 <Divider />
                        (Available: 9:00am to 10:00pm)
                        <Divider />
                    </Text>
                </Box>
                <Flex
                    justifyContent="flex-start"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Flex justifyContent="flex-start" alignItems="center">
                        <EmailIcon boxSize={4} color="#fff" mr={2} mb={-1} />
                        <Text color="#fff">mmi.mamunn@gmail.com</Text>
                    </Flex>
                    <Flex justifyContent="flex-start" alignItems="center"></Flex>
                </Flex>
            </Flex>
        </Container>
    );
}
