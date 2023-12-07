import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

import {
	Box,
	ButtonOutline,
	Section,
	Text,
	Title,
} from "../../components/Core";

// import imgL from "../../assets/image/png/portrait-2.png";
import bgHeroPattern from "../../assets/image/webp/hero-pattern-2.webp";
import { device } from "../../utils";

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
	max-width: 50%;
	@media ${device.sm} {
		max-width: 60%;
	}
	@media ${device.lg} {
		max-width: 100%;
	}
`;

const Hero = ({ imgSrc, title, description1, description2, buttonText }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<SectionStyled hero className="position-relative">
				<Container>
					<Row className="align-items-center">
						<Col lg="5" md="8" sm="9">
							<div className="text-center text-lg-right position-relative">
								<div className="img-main">
									<ImgRight src={imgSrc} alt="" />
								</div>
							</div>
						</Col>
						<Col lg="7" className="mb-5 mb-lg-0">
							<Box pl={[0, null, null, "3.125rem"]}>
								<Title mb="2rem">{title}</Title>

								<Text
									color="dark"
									css={`
										line-height: 1.5;
									`}
									mb="2.5rem"
								>
									{description1}
									<br />
									{description2}
								</Text>

								<Box>
									<Link
										to="works"
										spy={true}
										smooth={true}
										offset={-50}
										duration={1000}
									>
										<ButtonOutline>{buttonText}</ButtonOutline>
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
