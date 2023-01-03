import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/Banner';

function App() {
  return (
    <ChakraProvider>
      <Banner></Banner>
    </ChakraProvider>
  );
}

export default App;
