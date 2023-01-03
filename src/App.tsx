import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/Banner';
import NameTabs from './components/NameTabs';

function App() {
  return (
    <ChakraProvider>
      <Banner></Banner>
      <NameTabs></NameTabs>
    </ChakraProvider>
  );
}

export default App;
