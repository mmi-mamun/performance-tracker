import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Container,
    Heading,
    Stack,
    StackDivider,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    RadialLinearScale,
    Tooltip,
} from "chart.js";
import { Bar, PolarArea } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function User1() {
    // data for apply start
    const data = {
        datasets: [
            {
                label: "Application number",
                data: [
                    { x: "20/12/2022", y: 10 },
                    { x: "21/12/2022", y: 10 },
                    { x: "22/12/2022", y: 10 },
                    { x: "23/12/2022", y: 10 },
                    { x: "24/12/2022", y: 10 },
                    { x: "25/12/2022", y: 0 },
                    { x: "26/12/2022", y: 20 },
                    { x: "27/12/2022", y: 0 },
                    { x: "28/12/2022", y: 0 },
                    { x: "29/12/2022", y: 0 },
                    { x: "30/12/2022", y: 10 },
                    { x: "31/12/2022", y: 10 },
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
            }
        ]
    };
    // data for apply end

    // data for average score start 
    const data2 = {
        labels: [
            "20/12/2022",
            "21/12/2022",
            "22/12/2022",
            "23/12/2022",
            "24/12/2022",
            "25/12/2022",
            "26/12/2022",
            "27/12/2022",
            "28/12/2022",
            "29/12/2022",
            "30/12/2022",
            "31/12/2022",
        ],
        datasets: [
            {
                label: "# of Applied",
                data: [10, 10, 10, 10, 10, 0, 20, 0, 0, 0, 10, 10],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(166, 110, 64, 0.5)",
                ],
                borderWidth: 1,
            },
        ],
    };
    // data for average score end 

    return (
        <section>
            {/* Interview details  */}
            <div>
                <Heading textTransform="uppercase" pt={3} pb={12} textAlign="center" color="green">
                    *Adnan Mirza*
                </Heading>
                <Heading textTransform="uppercase" py={3} textAlign="center">
                    MARKS OF ALL MOCK TESTS
                </Heading>
                <Container mb={6} maxW="80%" py={6}>
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>S/I</Th>
                                    <Th>Interviewer Name</Th>
                                    <Th>Get Number</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>01</Td>
                                    <Td>MD. MUZAHIDUL ISLAM MAMUN</Td>
                                    <Td>70 out of 70</Td>
                                </Tr>
                                <Tr>
                                    <Td>02</Td>
                                    <Td>MD. ASHRAFUL ISLAM</Td>
                                    <Td>70 out of 70</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>

            {/* apply data  */}
            <div>
                <Heading textTransform="uppercase" pb={6} textAlign="center">
                    DAY WISE APPLIED NUMBER
                </Heading>
                <Container mb={6} maxW="80%">
                    <Bar data={data}></Bar>
                </Container>
            </div>

            {/* All marks for each projects */}
            <div>
                <Heading textTransform="uppercase" py={6} textAlign="center">
                    All mark of each project
                </Heading>
                <Container maxW="80%" py={6}>
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>S/I</Th>
                                    <Th>Project Name</Th>
                                    <Th>Getting Mark From Ashraful</Th>
                                    <Th>Getting Mark From MI Mamun</Th>
                                    <Th>Total Mark</Th>
                                    <Th>Average Mark</Th>
                                    <Th>Feedback</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign="center">01</Td>
                                    <Td textAlign="center">Phone Cart</Td>
                                    <Td textAlign="center">9.5/10</Td>
                                    <Td textAlign="center">10/10</Td>
                                    <Td textAlign="center">19.5/20</Td>
                                    <Td textAlign="center">9.75/10</Td>
                                    <Td textAlign="center">Pending...</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign="center">02</Td>
                                    <Td textAlign="center">Cook Book</Td>
                                    <Td textAlign="center">9/10</Td>
                                    <Td textAlign="center">7/10</Td>
                                    <Td textAlign="center">16/20</Td>
                                    <Td textAlign="center">8/10</Td>
                                    <Td textAlign="center">Pending...</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign="center">03</Td>
                                    <Td textAlign="center">Course Zone</Td>
                                    <Td textAlign="center">9.5/10</Td>
                                    <Td textAlign="center">7/10</Td>
                                    <Td textAlign="center">16.5/20</Td>
                                    <Td textAlign="center">8.25/10</Td>
                                    <Td textAlign="center">Pending...</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Container>


                {/* average score */}
                <Heading textTransform="uppercase" mt={12} py={6} textAlign="center">
                    Average score
                </Heading>
                <Container maxW="80%" py={6}>
                    <Card>
                        {/* <CardHeader>
                            <Heading size="md">Name: Adnan Mirza</Heading>
                        </CardHeader> */}

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Box>
                                    <Heading size="xs" textTransform="uppercase" fontSize='3xl' as='b'>
                                        Mock Test (Out of 70)
                                    </Heading>
                                    <br />
                                    <Text pt="2" fontSize="2xl" as='i'>
                                        (70 + 70) / 2 = 70
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="xs" textTransform="uppercase" fontSize='3xl' as='b'>
                                        Apply job (Per day)
                                    </Heading>
                                    <br />
                                    <Text pt="2" fontSize="2xl" as='i'>
                                        (10 + 10 + 10 + 10 + 10 + 0 + 20 + 0 + 0 + 0 + 10 + 10) / 12 = 7.5
                                    </Text>
                                    <Container maxW="40%" my={6}>
                                        <PolarArea data={data2} />
                                    </Container>
                                </Box>
                                <Box>
                                    <Heading size="xs" textTransform="uppercase" fontSize='3xl' as='b'>
                                        Project Marks (Out of 30)
                                    </Heading>
                                    <br />
                                    <Text pt="2" fontSize="2xl" as='i'>
                                        (9.75 + 8 + 8.25) = 26
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </section>
    )
}

export default User1;