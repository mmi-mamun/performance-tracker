import React from 'react'
import { Container, Heading } from "@chakra-ui/react";
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


function User2() {

    const data = {
        datasets: [
            {
                label: "Application number",
                data: [
                    { x: "20/12/2022", y: 2 },
                    { x: "21/12/2022", y: 4 },
                    { x: "22/12/2022", y: 7 },
                    { x: "23/12/2022", y: 0 },
                    { x: "24/12/2022", y: 0 },
                    { x: "25/12/2022", y: 7 },
                    { x: "26/12/2022", y: 5 },
                    { x: "27/12/2022", y: 7 },
                    { x: "28/12/2022", y: 8 },
                    { x: "29/12/2022", y: 6 },
                    { x: "30/12/2022", y: 7 },
                    { x: "31/12/2022", y: 3 },
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
    return (
        <div>
            <Heading textTransform="uppercase" pb={6} textAlign="center">
                DAY WISE APPLICATION NUMBER
            </Heading>
            <Container mb={6} maxW="80%">
                <Bar data={data}></Bar>
            </Container>
        </div>
    )
}

export default User2;