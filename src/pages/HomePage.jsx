import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/productCard";

const HomePage = () => {

  const { fetchProducts,products } = useProductStore(); // Destructure the fetchProducts function and products array from the useProductStore hook.
  
  useEffect(() => {                           // Call the fetchProducts function when the component mounts.
        fetchProducts();                        // Fetch the products from the server.
  }, [fetchProducts]);                  // Add fetchProducts as a dependency to the useEffect hook.
  console.log("products",products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack>
        <Text
          fontSize={"30"}
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
        
        </SimpleGrid>

        <Text fontSize="xl" fontWeight="bold" textAlign={"center"} color='gray.500'>
          No products found 😢{" "}
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>

    </Container>
  )
}

export default HomePage
