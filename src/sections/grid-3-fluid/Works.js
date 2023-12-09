import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import styled from "styled-components";

import {
	Box,
	ButtonOutline,
	ListNav,
	Section,
	Text,
	Title,
} from "../../components/Core";
import RotateImg from "../../components/RotateImg";
import { gridWorks2 } from "../../data";
import { useWindowSize } from "../../hooks";
import { breakpoints } from "../../utils";

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

const Works = ({
	label1,
	label2,
	label3,
	label4,
	buttonText,
	imgSrc1,
	imgSrc2,
	imgSrc3,
	imgSrc4,
	imgSrc5,
	imgSrc6,
	imgSrc7,
	imgSrc8,
	imgSrc9,
}) => {
	const [items, setItems] = useState([]);
	const [activeLink, setActiveLink] = useState("*");

	useEffect(() => {
		const newItems = [
			{
				thumbnail: imgSrc1,
				categories: ["photography"],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc2,
				categories: ["ux-design"],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc3,
				categories: ["photography"],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc4,
				categories: [`branding`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc5,
				categories: [`photography`, `ux-design`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc6,
				categories: [`branding`, `ux-design`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc7,
				categories: [`photography`, `branding`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc8,
				categories: ["ux-design"],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc9,
				categories: ["photography"],
				link: "/portfolio-details",
			},
		];

		setItems(newItems);
	}, [
		imgSrc1,
		imgSrc2,
		imgSrc3,
		imgSrc4,
		imgSrc5,
		imgSrc6,
		imgSrc7,
		imgSrc8,
		imgSrc9,
	]);

	const filterBy = (cat) => {
		if (cat === "*") {
			setActiveLink("*");
			setItems(gridWorks2);
		} else {
			const filteredItems = gridWorks2.filter((item) => {
				return item.categories.indexOf(cat) !== -1;
			});
			setActiveLink(cat);
			setItems(filteredItems);
		}
	};

	return (
		<>
			{/* <!-- Works Area --> */}
			<Section className="position-relative">
				<Container>
					<Box
						mb="2.5rem"
						ml="-1.75rem"
						className="d-flex justify-content-center"
					>
						<ListNav className="nav">
							<li className="nav-item">
								<a
									className={`nav-link font-weight-bold text-uppercase ${
										activeLink === "*" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("*");
									}}
								>
									{label1}
								</a>
							</li>
							<li className="nav-item">
								<a
									className={`nav-link font-weight-bold text-uppercase ${
										activeLink === "branding" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("branding");
									}}
								>
									{label2}
								</a>
							</li>
							<li className="nav-item">
								<a
									className={`nav-link font-weight-bold text-uppercase ${
										activeLink === "ux-design" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("ux-design");
									}}
								>
									{label3}
								</a>
							</li>
							<li className="nav-item">
								<a
									className={`nav-link font-weight-bold text-uppercase ${
										activeLink === "photography" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("photography");
									}}
								>
									{label4}
								</a>
							</li>
						</ListNav>
					</Box>
				</Container>
				<Container fluid>
					<Grid>
						{items.map((item, index) => (
							<Col lg="4" md="6" key={index} className="filtr-item">
								<WorkCard className="position-relative" mb="30px">
									<RotateImg link={item.link} imgSrc={item.thumbnail} />
									<Box pt="2.125rem">
										<WorkText className="overflow-hidden text-center">
											<Text variant="tag" mb="0.5rem">
												{item.categories[0]}
											</Text>
											<Title variant="cardLg">
												<Link href={item.link}>
													<a>{item.brand} </a>
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
