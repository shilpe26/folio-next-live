import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import styled from "styled-components";

import {
	Box,
	ButtonOutline,
	Section,
	Text,
	Title,
} from "../../components/Core";
import RotateImg from "../../components/RotateImg";
import { devWorks2 } from "../../data";
import { useWindowSize } from "../../hooks";
import { breakpoints } from "../../utils/index.tsx";

const WorkCard = styled(Box)``;
const WorkText = styled(Box)``;

const Grid = (props) => {
	const size = useWindowSize();

	const masonryOptions = {
		transitionDuration: 1000,
	};

	return size.width < breakpoints.lg ? (
		<Masonry
			options={masonryOptions}
			className={"masonry-grid row"}
			{...props}
		/>
	) : (
		<Row {...props} />
	);
};

const Works = ({ buttonText }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(devWorks2);
	}, []);

	return (
		<>
			{/* <!-- Works Area --> */}
			<Section className="position-relative pt-0">
				<Container>
					<Grid>
						{items.map((item, index) => (
							<Col md="6" key={index} className="filtr-item">
								<WorkCard className="position-relative" mb="30px">
									<RotateImg link={item.link} imgSrc={item.thumbnail} />
									<Box pt="2.125rem">
										<WorkText className="overflow-hidden text-center">
											<Text variant="tag" mb="0.5rem">
												{item.categories[0]}
											</Text>
											<Title variant="cardLg">
												<Link href={item.link}>
													<a>{item.brand}</a>
												</Link>
											</Title>
										</WorkText>
									</Box>
								</WorkCard>
							</Col>
						))}
					</Grid>
					<Box pt="3rem" className="text-center">
						<ButtonOutline>{buttonText}</ButtonOutline>
					</Box>
				</Container>
			</Section>
		</>
	);
};

export default Works;
