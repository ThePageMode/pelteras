import { Box, Img, Flex, Spacer, Text } from "@chakra-ui/react";    
import { Link } from "react-router-dom";
import bgpelte from "../images/bgpelte.png";

function Navigation() {
return(


<>
     <Box
width="100vw"
display="flex"
alignItems="center"
justifyContent="center"
position="fixed" // Fix the navigation bar at the top
top="-5"
left="0"
>
<Box boxSize="400px">
<Link to="/home">
<Img
src="https://i.imgur.com/luFrJ3C.png"
className="type"
alt="type"
/>
</Link>
<Flex align="center">

<Link to="/home">
    <Text fontFamily='serif' fontSize="xl">Home</Text>
    </Link>
<Spacer />
<Link  to="/about" ml="4">
<Text fontFamily='serif' fontSize="xl">About</Text>
</Link>
<Spacer />
<Link to="/store" ml="4">
<Text fontFamily='serif' fontSize="xl">Store</Text>
</Link>
<Spacer />
<Link to="/contact" ml="4">
<Text fontFamily='serif' fontSize="xl">Contact</Text>
</Link>
</Flex>
</Box>
</Box>
</>
)
}
export default Navigation;