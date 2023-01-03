import {
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import UserOne from "./User1";
import UserThree from "./User2";
import UserTwo from "./User3";
export default function NameTabs() {
    return (
        <>
            <Container centerContent maxW="100%" mt={8}>
                <Tabs isFitted variant="enclosed" width="80%">
                    <TabList mb="1em">
                        <Tab>Golam Azam</Tab>
                        <Tab>Muzahidul Islam Mamun</Tab>
                        <Tab>Golam Maula</Tab>
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
