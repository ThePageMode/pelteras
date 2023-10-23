import bgpelte from '../images/bgpelte.png';
import { Box, Img, Flex, Text, Button, Spacer, Stack, HStack, Center, VStack } from '@chakra-ui/react';
import YouTube from 'react-youtube';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import {FaSpotify, FaApple} from 'react-icons/fa';


function Home() {
    const [playing, setPlayin] = useState(false);   
    
      const onReady = (event) => {
    // You can do something when the video is ready to be played
  };

  const onPlay = (event) => {
    setPlayin(true);
  };

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
    justifyContent="center"
>
<Flex direction={{ base: 'column', md: 'row' }}>
  <VStack>
    <Center>
  <Box marginTop="150">
<Link href="https://youtu.be/6y8_tAGU9sU?si=y9k_yP05fuZ-jLgk">
      <iframe width="800" height="450" src="https://www.youtube.com/embed/6y8_tAGU9sU?si=Ymf2Dux8MT64O9kA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{zIndex: 1}}></iframe>
</Link>
</Box>
</Center>
<Text
fontFamily='serif'
fontSize="3xl" >Listen to "Peranjakan"</Text>
<Center>
  
  <HStack>
    
    <Link target="_blank" to="https://open.spotify.com/album/4zx6WCVmJfpIfsVSJ6qFgH?si=BrGy2AfWT6qeEvsW0EiD4g">
<FaSpotify size="3em" color="black" />
</Link>
<Link target="_blank" to="https://music.apple.com/id/album/peranjakan/1709310572">
<FaApple size="3em" color="black" />
</Link>

</HStack> 

</Center>
</VStack>
</Flex>
</Box>


            </>

    )
}


export default Home;