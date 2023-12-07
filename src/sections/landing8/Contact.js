import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import bgFooter from "../../assets/image/png/subscribe-pattern.png";
import { Box, LinkContact, Section, Title } from "../../components/Core";

const SectionStyled = styled(Section)`
	&::before {
		position: absolute;
		bottom: -150px;
		content: "";
		width: 120%;
		height: 150%;
		background: url(${bgFooter}) bottom center no-repeat;
		background-size: cover;
		z-index: -1;
	}
`;

const Contact = ({ title1, title2, href1, href2 }) => {
	return (
		<>
			{/* <!-- Contact Area --> */}
			<SectionStyled className="position-relative">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col lg="11" xl="10" className="text-center">
							<Box>
								<Title variant="secSm">
									{title1} <br />
									{title2}
								</Title>

								<Box
									className="text-center d-flex justify-content-center"
									mt={["3rem", null, "4rem"]}
								>
									<div className="d-flex flex-column flex-lg-row justify-content-center">
										<LinkContact
											href="mailto:contact@folio.design"
											target="_blank"
											className="mb-2 mb-lg-0"
										>
											{href1}
										</LinkContact>
										<span className="divider mx-2 mx-lg-4 d-none d-lg-block">
											|
										</span>
										<LinkContact
											href="https://www.linkedin.com/folio"
											target="_blank"
										>
											{href2}
										</LinkContact>
									</div>
								</Box>
							</Box>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Contact;
