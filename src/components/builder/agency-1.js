import React from "react";
import { Element } from "react-scroll";

import CTA from "../../sections/landing5/CTA";
import Hero from "../../sections/landing5/Hero";
import Works from "../../sections/landing5/Works";
import { Box } from "../Core";
import PageWrapper from "../PageWrapper";

const IndexPage = () => {
	return (
		<>
			<PageWrapper darkTheme>
				<Box bg="info">
					<Hero />
					<Element name="works">
						<Works />
					</Element>
					<CTA />
				</Box>
			</PageWrapper>
		</>
	);
};
export default IndexPage;
