import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { Box, ButtonIcon, Section, Text, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

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

const Hero = ({ title, description1, description2, buttonText }) => {
	const gContext = useContext(GlobalContext);

	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled hero className="position-relative">
				<Container>
					<Row className="align-items-center">
						<Col lg="7">
							<Box mt={5}>
								<Title>{title}</Title>
								<Text pb="1.875rem" pt="1.25rem" color="heading">
									{description1} <br />
									{description2}
								</Text>
								<Box>
									<ButtonIcon
										onClick={(e) => {
											e.preventDefault();
											gContext.toggleContact();
										}}
									>
										{buttonText}
									</ButtonIcon>
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
