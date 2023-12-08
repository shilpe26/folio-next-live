import React from "react";

import CTA from "../../sections/landing2/CTA";
import Hero from "../../sections/landing2/Hero";
import Works from "../../sections/landing2/Works";
import PageWrapper from "../PageWrapper";

const IndexPage = () => {
	return (
		<>
			<PageWrapper darkTheme>
				<Hero />
				<Works />
				<CTA />
			</PageWrapper>
		</>
	);
};
export default IndexPage;
