// CHAKRA-UI
import { Center, Wrap, WrapItem, Stack, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

// DATA
// import products from '../products';

//COMPONENTS
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/actions/productActions';

// REDUX
import { useDispatch, useSelector } from 'react-redux';

// HOOK
import { useEffect } from 'react';

const ProductsScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.products);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Wrap spacing='30px' justify='center' minHeight='100vh'>
            {loading ? (
                <Stack direction='row' spacing={4}>
                    <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
                </Stack>
            ) : error ? (
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>We are sorry!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            ) : products.map(product => (
                <WrapItem key={product._id}>
                    <Center w='250px' h='550px'>
                        <ProductCard product={product} />
                    </Center>
                </WrapItem>
            ))}
        </Wrap>
    );
};

export default ProductsScreen;