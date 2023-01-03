import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/Banner';
import User1 from './components/User1';

function App() {
  return (
    <ChakraProvider>
      <Banner></Banner>
      <User1></User1>
    </ChakraProvider>
  );
}

export default App;
