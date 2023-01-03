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
        </div>
    )
}

export default User3