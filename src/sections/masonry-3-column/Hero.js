import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import { Box, Section, Title } from "../../components/Core";

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

const ImgRight = styled.img`
	border-radius: 50%;
	transition: 0.4s;
	&:hover {
		transform: scale(0.8) rotate(-16deg);
		box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
	}
`;

const Hero = ({ title, description1, description2, imgSrc }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled hero className="position-relative">
				<Container>
					<Box className="d-flex flex-column align-items-center text-center">
						<Box
							className="text-center text-lg-right position-relative"
							pb="3.125rem"
						>
							<div className="img-main text-center">
								<ImgRight src={imgSrc} alt="" className="img-fluid" />
							</div>
						</Box>
						<Title
							variant="card"
							mb="2.5rem"
							fontSize="1rem"
							className="text-uppercase"
							css={`
								letter-spacing: 1.63px;
							`}
						>
							{title}
						</Title>
						<Title>
							{description1} <br /> {description2}
						</Title>
					</Box>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Hero;
