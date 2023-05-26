// CHRAKRA-UI
import { ChakraProvider } from '@chakra-ui/react';

// ROUTES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar';

function App() {
  return(
    <ChakraProvider>
      <Router>
        <NavBar />
        <main></main>
      </Router>
    </ChakraProvider>
  );
};

export default App;
