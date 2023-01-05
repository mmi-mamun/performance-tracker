import {
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import UserOne from "./User1";
import UserTwo from "./User2";
import UserThree from "./User3";
import { Select } from '@chakra-ui/react'

export default function NameTabs() {
    return (
        <>
            <Container centerContent maxW="100%" mt={8}>
                <Tabs isFitted variant="enclosed" width="80%">
                    <TabList mb="1em" bgGradient="radial(purple.300, yellow.400, green.200)" >
                        <Tab fontSize='2xl' as='i'>Mirza Adnan</Tab>
                        <Tab fontSize='2xl' as='i'>M MI Mamun</Tab>
                        <Tab fontSize='2xl' as='i'>Ashraful Islam</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <UserOne />
                        </TabPanel>
                        <TabPanel>
                            <UserTwo />
                        </TabPanel>
                        <TabPanel>
                            <UserThree />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    );
}
