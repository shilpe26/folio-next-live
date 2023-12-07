import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { Box, Section, Text, Title } from "../../components/Core";

import bgHeroPattern from "../../assets/image/webp/hero-pattern-2.webp";

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

const Hero = ({ title, description1, description2 }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled hero className="position-relative">
				<Container>
					<Row>
						<Col lg="11" className="mb-5 mb-lg-0">
							<Box>
								<Text
									variant="tag"
									mb={4}
									className="text-uppercase"
									color="heading"
									mb="40px"
								>
									👋 {title}
								</Text>
								<Title>
									{description1} <br /> {description2}
								</Title>
							</Box>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Hero;
