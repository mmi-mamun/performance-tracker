import { Container, Image } from "@chakra-ui/react";
export default function Banner() {
    return (
        <>
            <Container maxH="450px" overflow="hidden" centerContent maxW="100%">
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src="https://img.freepik.com/premium-vector/flat-database-programmer-with-programming-languages-css-html-it-ui-developing-coding-concept-outline-design-style-minimal-illustration-landing-page-web-banner-infographics-hero-images_269730-1888.jpg?w=2000"
                    alt="Banner"
                />
            </Container>
        </>
    );
}
