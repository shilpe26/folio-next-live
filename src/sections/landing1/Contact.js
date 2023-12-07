import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Availability from "../../components/Availability";
import { ButtonIcon, Section, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

const Hero = ({ description, buttonText }) => {
	const gContext = useContext(GlobalContext);

	return (
		<>
			<Section>
				<Container>
					<Row className="text-center justify-content-center">
						<Col lg="10" xl="7">
							<Availability />
							<div className="text-center my-5">
								<Title>{description}</Title>
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
