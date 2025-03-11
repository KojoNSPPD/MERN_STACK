import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({  // Create a newProduct state with the initial value of an empty object.
		name: "",
		price: "",
		image: "",
	});
	const toast = useToast();   // Create a toast notification using the useToast hook.

	const { createProduct } = useProductStore();  // Destructure the createProduct function from the useProductStore hook.

	const handleAddProduct = async () => {   // Create a handleAddProduct function that sends a POST request to the /api/products endpoint with the newProduct object as the body.
		const { success, message } = await createProduct(newProduct);  // Call the createProduct function with the newProduct object as an argument and destructure the success and message properties from the returned object.
		console.log("Success;", success);
		console.log("Message;", message);
	 	if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
	setNewProduct({ name: "", price: "", image: "" });   // Reset the newProduct state to an empty object after adding the product.

	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};
export default CreatePage;
