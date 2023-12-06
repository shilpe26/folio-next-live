import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { works1 } from "../../data";
import { Section } from "../Core";
import PageWrapper from "../PageWrapper";
import RotateImg from "../RotateImg";

const IndexPage = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(works1);
	}, []);

	return (
		<>
			<PageWrapper>
				<Section hero>
					<Container fluid>
						<Row>
							{items.map((item, index) => (
								<Col lg="3" md="4" sm="6" key={index} className="filtr-item">
									<RotateImg
										mb="30px"
										link="/portfolio-details"
										imgSrc={item.thumbnail}
									/>
								</Col>
							))}
						</Row>
					</Container>
				</Section>
			</PageWrapper>
		</>
	);
};
export default IndexPage;
