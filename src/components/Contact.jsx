import Navigation from "./Navigation";
import { Box, Center, Text, Stack, HStack} from "@chakra-ui/react";
import bgpelte from "../images/bgpelte.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Contact() {
    
    
    return (
<>
        <Navigation />
        
        <Box
        backgroundImage={`url(${bgpelte})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100vw" // 100% of viewport width
        height="100vh" // 100% of viewport height
        display="flex"
        alignItems="center"
        justifyContent="center"> 
        
        
        
        <Center h="100%">
            <Stack>
      <Text fontFamily="serif" fontSize="2xl" as="b">pelteras@gmail.com</Text>
      <Center><Text fontFamily="serif" fontSize="2xl" as="b">+628561890046</Text></Center>
      
     <Center>
      <HStack>
      <Link to="https://www.instagram.com/pelteras/" target="_blank">
      <FaInstagram size="3em" color="black" />
      </Link>
      <Link to="https://twitter.com/pelteras" target="_blank">
      <FaTwitter size="3em" color="black" />
      </Link>
    
      </HStack>
      </Center>
      </Stack>
        </Center>
        
        </Box>
        </>
    )    
}

export default Contact;