// CHRAKRA-UI
import { ChakraProvider } from '@chakra-ui/react';

// ROUTES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavBar from './components/NavBar';
import ProductsScreen from './screens/ProductsScreen';

function App() {
  return(
    <ChakraProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsScreen />} />
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
};

export default App;
