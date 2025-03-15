import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/productCard";

const HomePage = () => {

  const { fetchProducts, products } = useProductStore(); // Destructure the fetchProducts function and products array from the useProductStore hook.
  
  const memoizedFetchProducts = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {                           // Call the fetchProducts function when the component mounts.
    memoizedFetchProducts();                  // Fetch the products from the server.
  }, [memoizedFetchProducts]); 
  console.log("products",products);                 // Add fetchProducts as a dependency to the useEffect hook.
  
  return (
    <Container maxW="container.xl" py={12}>
      <VStack>
        <Text
          fontSize={"30px"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

         {products.length === 0 && (
        <Text fontSize="xl" fontWeight="bold" textAlign={"center"} color='gray.500'>
          No products found 😢{" "}
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>
         )}
      </VStack>

    </Container>
  )

}

export default HomePage
