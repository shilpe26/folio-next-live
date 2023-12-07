import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

import { Box, Button, Section, Text, Title } from "../../components/Core";

const ImgRight = styled.img`
	max-width: 100%;
`;

const Hero = ({ dynamicText, descriptionText, buttonText, imgSrc }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<Section hero className="position-relative">
				<Container>
					<Row className="align-items-center">
						<Col lg="7" className="mb-5 mb-lg-0">
							<Box>
								<Text
									variant="tag"
									mb={4}
									className="text-uppercase"
									color="heading"
									mb="40px"
								>
									{dynamicText}
								</Text>
								<Title variant="hero">{descriptionText}</Title>

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
						<Col lg="5" md="8" sm="9">
							<div className="text-center text-lg-right position-relative">
								<div className="img-main">
									<ImgRight src={imgSrc} alt="" />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Hero;
