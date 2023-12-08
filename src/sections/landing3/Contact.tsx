import React, { useContext } from "react";

import { Col, Container, Row } from "react-bootstrap";

import { ButtonIcon, Section, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

const Hero = ({ title, buttonText }) => {
	const gContext = useContext(GlobalContext);

	return (
		<>
			<Section className="pt-4">
				<Container>
					<Row className="text-center justify-content-center">
						<Col lg="10" xl="7">
							<div className="text-center mb-5">
								<Title variant="hero">{title}</Title>
							</div>
							<div className="text-center">
								<ButtonIcon
									onClick={(e) => {
										e.preventDefault();
										gContext.toggleContact();
									}}
								>
									{buttonText}
								</ButtonIcon>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Hero;
