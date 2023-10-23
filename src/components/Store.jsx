import Navigation from "./Navigation";
import { Box, Text, Center, Grid, GridItem, Img } from "@chakra-ui/react";
import bgpelte from "../images/bgpelte.png";
import peltekaca from "../images/peltekaca.jpeg";


function Store() {
    
    
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
        
   
                <Box marginTop="-20" boxSize="350px">
                <Center>
                <Text fontFamily="serif" fontSize="3xl" as="b">COMING SOON</Text>
                  </Center>
                <Img sizes="400px" src={peltekaca} alt="logo" />
            
                </Box>
            
     
       
        </Box>
        </>
    )    
}

export default Store;