import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";
import { Box, ButtonIcon, Section, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

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

const Hero = ({ imgSrc, title, buttonText }) => {
	const gContext = useContext(GlobalContext);

	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled hero className="position-relative">
				<Container>
					<Box pb="40px">
						<img
							src={imgSrc}
							alt=""
							css={`
								border-radius: 50rem !important;
							`}
						/>
					</Box>
					<Row className="align-items-lg-end">
						<Col lg="8" sm="12" className="mb-5 mb-lg-0">
							<Box>
								<Title variant="hero">{title}</Title>
							</Box>
						</Col>
						<Col lg="4" sm="12">
							<Box pl="1.25rem">
								<ButtonIcon
									onClick={(e) => {
										e.preventDefault();
										gContext.toggleContact();
									}}
								>
									{buttonText}
								</ButtonIcon>
							</Box>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Hero;
