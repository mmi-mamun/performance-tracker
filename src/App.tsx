import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/Banner';
import NameTabs from './components/NameTabs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Banner></Banner>
      <NameTabs></NameTabs>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
