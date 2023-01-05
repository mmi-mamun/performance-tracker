import { Container, Image } from "@chakra-ui/react";
import banner from '../assets/images/banner.jpg'
export default function Banner() {
    return (
        <>
            <Container maxH="450px" overflow="hidden" centerContent maxW="100%">
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src={banner}
                    alt="Banner"
                />
            </Container>
        </>
    );
}
