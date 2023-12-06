import React from "react";
import { Element } from "react-scroll";

import CTA from "../../sections/landing4/CTA";
import Hero from "../../sections/landing4/Hero";
import Works from "../../sections/landing4/Works";
import PageWrapper from "../PageWrapper";

const IndexPage = () => {
	return (
		<>
			<PageWrapper darkTheme>
				<Hero />
				<Element name="works">
					<Works />
				</Element>
				<CTA />
			</PageWrapper>
		</>
	);
};
export default IndexPage;
