import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/Banner';
import User1 from './components/User1';
import User2 from './components/User2';
import User3 from './components/User3';

function App() {
  return (
    <ChakraProvider>
      <Banner></Banner>
      <User1></User1>
      <User2></User2>
      <User3></User3>
    </ChakraProvider>
  );
}

export default App;
