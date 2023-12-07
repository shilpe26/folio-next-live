import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Box, LinkContact, Section, Title } from "../../components/Core";

const Hero = ({ title, href1, href2 }) => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<Section className="position-relative">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col lg="11" xl="10" className="text-center">
							<Box>
								<Title variant="secSm">{title}</Title>

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
			</Section>
		</>
	);
};

export default Hero;
