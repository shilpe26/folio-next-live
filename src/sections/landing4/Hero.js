import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

import { Box, Button, Section, Text, Title } from "../../components/Core";
import IconCircle from "../../components/IconCircle";

import bgHero from "../../assets/image/png/dev-bg.png";

const SectionStyled = styled(Section)`
	&::before {
		opacity: 0.085;
		position: absolute;
		top: 0;
		content: "";
		width: 100%;
		height: 100%;
		background: url(${bgHero}) top center no-repeat;
		background-size: cover;
		z-index: -1;
	}
`;

const Hero = ({ title, description1, description2, buttonText }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled
				hero
				className="position-relative"
				pt={["50px", null, "75px", "100px"]}
				pb={["100px", null, "150px", "200px"]}
			>
				<Container>
					<Box className="d-flex flex-column align-items-center text-center">
						<IconCircle mb="2.5rem">
							<i className="icon icon-code-2"></i>
						</IconCircle>

						<Title variant="hero" mb="1.5rem">
							{title}
						</Title>
						<Text
							color="text"
							css={`
								line-height: 1.5;
							`}
							mb="2.5rem"
						>
							{description1}
							<br />
							{description2}
						</Text>
						<Link
							to="works"
							spy={true}
							smooth={true}
							offset={-50}
							duration={1000}
						>
							<Button>{buttonText}</Button>
						</Link>
					</Box>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Hero;
