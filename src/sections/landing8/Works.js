import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Box, ButtonOutline, ListNav, Section } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { works2 } from "../../data";

const Works = ({ label1, label2, label3, label4, buttonText }) => {
	const [items, setItems] = useState([]);
	const [activeLink, setActiveLink] = useState("*");

	useEffect(() => {
		setItems(works2);
	}, []);

	const filterBy = (cat) => {
		if (cat === "*") {
			setActiveLink("*");
			setItems(works2);
		} else {
			const filteredItems = works2.filter((item) => {
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
					<Masonry
						options={masonryOptions}
						className={"masonry-grid row"} // default ''
					>
						{items.map((item, index) => (
							<Col lg="3" md="4" sm="6" key={index} className="filtr-item">
								<WorkCard workItem={item} mb="30px" link={item.link} />
							</Col>
						))}
					</Masonry>
					<Box pt="3rem" className="text-center">
						<ButtonOutline>{buttonText}</ButtonOutline>
					</Box>
				</Container>
			</Section>
		</>
	);
};

export default Works;
