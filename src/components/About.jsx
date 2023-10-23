import Navigation from "./Navigation";
import { Box, Img, Center } from "@chakra-ui/react";
import bgpelte from "../images/bgpelte.png";
import pelte from "../images/pelte.jpg";


function About() {
    
    
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
        
        
        <Box marginTop="95" boxSize="3xl">
        <Center h="100%">
        <Img src={pelte} alt="logo" />
        </Center>
        </Box>
        
        </Box>
        </>
    )    
}

export default About;