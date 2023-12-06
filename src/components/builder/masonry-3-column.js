import React from "react";
import { Element } from "react-scroll";

import Contact from "../../sections/common/Contact";
import Hero from "../../sections/masonry-3-column/Hero";
import Works from "../../sections/masonry-3-column/Works";
import PageWrapper from "../PageWrapper";

const IndexPage = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				<Element name="works">
					<Works />
				</Element>

				<Contact />
			</PageWrapper>
		</>
	);
};
export default IndexPage;
