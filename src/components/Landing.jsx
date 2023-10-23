import pelblack from "../images/pelblack.png";
import pelwhite from "../images/pelwhite.png";
import bgpelte from "../images/bgpelte.png";
import { Img, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
	const [hovered, setHovered] = useState(false);
	return (
		<>
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
				<Link to={`/home`}>
				<Box boxSize="md">
					<Img
						src={hovered ? pelwhite : pelblack}
						className="logo"
						alt="logo"
						_hover={{
							cursor: "pointer",
						}}
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					/>
				</Box>
				</Link>
			</Box>
		</>
	);
}

export default Landing;
