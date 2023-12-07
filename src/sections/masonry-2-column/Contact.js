import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Availability from "../../components/Availability";
import { ButtonIcon, Section, Title } from "../../components/Core";

const Hero = ({ title, buttonText }) => {
	return (
		<>
			<Section>
				<Container>
					<Row className="text-center justify-content-center">
						<Col lg="10" xl="7">
							<Availability />
							<div className="text-center my-5">
								<Title>{title}</Title>
							</div>
							<div className="text-center">
								<ButtonIcon>{buttonText}</ButtonIcon>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Hero;
