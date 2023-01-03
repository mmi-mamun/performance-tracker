import React from 'react'
import {
    Box, Card, CardBody, CardHeader, Container, Heading, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,
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

function User3() {
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
                label: "# of Votes",
                data: [2, 4, 7, 0, 0, 7, 5, 7, 8, 6, 7, 3],
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

    return (
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
                                <Th>Getting Mark From Ashraful</Th>
                                <Th>Total Mark</Th>
                                <Th>Average Mark</Th>
                                <Th>Feedback</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>01</Td>
                                <Td>Phone Cart</Td>
                                <Td>40</Td>
                                <Td>50</Td>
                                <Td>90</Td>
                                <Td>45</Td>
                                <Td>Pending</Td>
                            </Tr>
                            <Tr>
                                <Td>02</Td>
                                <Td>Cook Book</Td>
                                <Td>50</Td>
                                <Td>50</Td>
                                <Td>100</Td>
                                <Td>50</Td>
                                <Td>Pending</Td>
                            </Tr>
                            <Tr>
                                <Td>03</Td>
                                <Td>Course Zone</Td>
                                <Td>40</Td>
                                <Td>50</Td>
                                <Td>90</Td>
                                <Td>45</Td>
                                <Td>Pending</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>


            {/* average score */}
            <Heading textTransform="uppercase" pb={6} textAlign="center">
                Average score
            </Heading>
            <Container maxW="80%" py={6}>
                <Card>
                    <CardHeader>
                        <Heading size="md">Name: Adnan Mirza</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    Mock Test
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    (70+70)/2 = 70
                                </Text>
                            </Box>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    Apply job
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    (2+4+7+0+0+7+5+7+8+6+7+3)/12 = 4.08
                                </Text>
                                <Container maxW="40%" my={6}>
                                    <PolarArea data={data2} />
                                </Container>
                            </Box>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    Project Marks
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    (45+50+45)= 46.67
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default User3