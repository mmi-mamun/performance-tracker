import React from 'react'
import {
    Box, Card, CardBody, CardHeader, Container, Heading, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,
} from "@chakra-ui/react";

function User1() {
    return (
        <div>
            <Heading textTransform="uppercase" py={6} textAlign="center">
                INTERVIEW DETAILS
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
                                <Td>MD. ASHRAFUL ISLAM</Td>
                                <Td>70 out of 70</Td>
                            </Tr>
                            <Tr>
                                <Td>02</Td>
                                <Td>MD. MUZAHIDUL ISLAM MAMUN</Td>
                                <Td>70 out of 70</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default User1;