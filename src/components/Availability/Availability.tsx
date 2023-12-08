import React from "react";
import styled from "styled-components";

import { Box, Text } from "../Core";
interface HeroProps {
	className?: string;
	rest?: any; 
  }
const AvailableCircle = styled(Box)`
	border-radius: 50%;
	width: 12px;
	height: 12px;
`;

const Hero: React.FC<HeroProps>  = ({ className = "justify-content-center", ...rest }) => {
	return (
		<>
			<Box className={`d-flex align-items-center ${className}`} {...rest}>
				<AvailableCircle className="bg-success" mr="13px" />
				<Text variant="tag" className="text-uppercase" color="heading">
					AVAILABLE FOR FREELANCE PROJECTS
				</Text>
			</Box>
		</>
	);
};

export default Hero;
