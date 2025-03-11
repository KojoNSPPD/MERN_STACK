import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {  
  const {colorMode, toggleColorMode} = useColorMode(); // This is a hook that provides the current color mode and a function to toggle it.
  return (
    <Container maxW={"1140px"} px={4}>  
      <Flex  // Flex is a layout component that arranges its children in a horizontal or vertical direction.
        h={16}  // The height of the Flex component.
        alignItems={"center"}  // The alignment of the Flex component's children along the cross axis.
        justifyContent={"space-between"}  // The alignment of the Flex component's children along the main axis.
        flexDir={{  // The direction of the Flex component's children.
            base: "column",  // The direction of the Flex component's children on the base screen size.
            sm: "row",  //  The direction of the Flex component's children on the sm screen size.
        }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }} // The font size of the Text component on the base and sm screen sizes.
            fontWeight={"bold"}  // The font weight of the Text component.
            textTransform={"uppercase"} // The text transformation of the Text component. 
            textAlign={"center"}   // The alignment of the Text component's children along the cross axis.
            bgGradient={"linear(to-r, cyan.400, blue.500)"}  // The background gradient of the Text component.
            bgClip={"text"} //  The background clip of the Text component.
          >
             <Link to={"/"}>Product Store 🛒</Link>  
          
          </Text>

          <HStack spacing={2} alignItems={"center"}> 
            <Link to={"/create"}> 
            <button>
              <PlusSquareIcon fontSize ={20}/> 
            </button>
            </Link>

            <button onClick={toggleColorMode}>  
              {colorMode === "light" ? <IoMoon/> : <LuSun size='20'/>} 
            </button>
              
            
          </HStack>

      </Flex>
    </Container>
  )
}
export default Navbar // Export the Navbar component.
