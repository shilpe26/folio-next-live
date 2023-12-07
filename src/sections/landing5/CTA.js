import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import bgFooter from "../../assets/image/png/subscribe-pattern.png";
import { ButtonIcon, Section, Title } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";

const SectionStyled = styled(Section)`
	&::before {
		position: absolute;
		bottom: -150px;
		content: "";
		width: 120%;
		height: 150%;
		background: url(${bgFooter}) bottom center no-repeat;
		background-size: cover;
	}
`;

const Hero = ({ title, buttonText }) => {
	const gContext = useContext(GlobalContext);

	return (
		<>
			<SectionStyled className="position-relative">
				<Container>
					<Row className="text-center justify-content-center">
						<Col lg="11" xl="10">
							<div className="text-center mb-5">
								<Title color="light" variant="secSm">
									{title}
								</Title>
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
			</SectionStyled>
		</>
	);
};

export default Hero;
