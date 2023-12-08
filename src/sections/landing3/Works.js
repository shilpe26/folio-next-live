import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Box, ListNav, Section } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { devWorks1 } from "../../data";

const Works = ({
	label1,
	label2,
	label3,
	label4,
	imgSrc1,
	imgSrc2,
	imgSrc3,
	imgSrc4,
	imgSrc5,
	imgSrc6,
	imgSrc7,
	imgSrc8,
}) => {
	const [items, setItems] = useState([]);
	const [activeLink, setActiveLink] = useState("*");

	useEffect(() => {
		const newItems = [
			{ thumbnail: imgSrc1, categories: ["web"], link: "/portfolio-details" },
			{
				thumbnail: imgSrc2,
				categories: [`app`, `web`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc3,
				categories: [`web`, `ui-design`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc4,
				categories: [`app`, `ui-design`, `web`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc5,
				categories: [`app`, `ui-design`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc6,
				categories: [`ui-design`, `web`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc7,
				categories: [`app`, `ui-design`],
				link: "/portfolio-details",
			},
			{
				thumbnail: imgSrc8,
				categories: [`web`, `ui-design`],
				link: "/portfolio-details",
			},
		];

		setItems(newItems);
	}, [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, imgSrc7, imgSrc8]);

	const filterBy = (cat) => {
		if (cat === "*") {
			setActiveLink("*");
			setItems(devWorks1);
		} else {
			const filteredItems = devWorks1.filter((item) => {
				return item.categories.indexOf(cat) !== -1;
			});
			setActiveLink(cat);
			setItems(filteredItems);
		}
	};

	const masonryOptions = {
		transitionDuration: 1000,
	};

	return (
		<>
			{/* <!-- Works Area --> */}
			<Section className="position-relative">
				<Container>
					<Box mb="2.5rem" ml="-1.75rem">
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
										activeLink === "ui-design" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("ui-design");
									}}
								>
									{label2}
								</a>
							</li>
							<li className="nav-item">
								<a
									className={`nav-link font-weight-bold text-uppercase ${
										activeLink === "app" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("app");
									}}
								>
									{label3}
								</a>
							</li>
							<li className="nav-item">
								<a
									className={`nav-link font-weight-bold text-uppercase ${
										activeLink === "web" ? "active" : null
									}`}
									onClick={(e) => {
										e.preventDefault();
										filterBy("web");
									}}
								>
									{label4}
								</a>
							</li>
						</ListNav>
					</Box>
				</Container>

				<Container fluid>
					<Masonry
						options={masonryOptions}
						className={"masonry-grid row"} // default ''
					>
						{items.map((item, index) => (
							<Col lg="4" md="6" sm="6" key={index} className="filtr-item">
								<WorkCard workItem={item} link={item.link} mb="30px" />
							</Col>
						))}
					</Masonry>
				</Container>
			</Section>
		</>
	);
};

export default Works;
