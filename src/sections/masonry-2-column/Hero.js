import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

import Availability from "../../components/Availability";
import { Box, Button, Section, Title } from "../../components/Core";

import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

const SectionStyled = styled(Section)`
	&::before {
		position: absolute;
		top: 0;
		content: "";
		width: 100%;
		height: 120%;
		background: url(${bgHeroPattern}) top center no-repeat;
		background-size: cover;
		z-index: -1;
	}
`;

const Hero = ({ title, buttonText }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled hero className="position-relative">
				<Container>
					<Row className="align-items-center justify-content-center">
						<Col lg="7" className="text-center">
							<Box mt={5}>
								<Availability mb="2.5rem" />
								<Title variant="hero">{title}</Title>

								<Box mt="52px">
									<Link
										to="works"
										spy={true}
										smooth={true}
										offset={-50}
										duration={1000}
									>
										<Button arrowRight>{buttonText} </Button>
									</Link>
								</Box>
							</Box>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Hero;
