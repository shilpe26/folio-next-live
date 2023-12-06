import React from "react";
import { Box } from "../Core";

import Contact from "../../sections/landing8/Contact";
import Hero from "../../sections/landing8/Hero";
import Works from "../../sections/landing8/Works";
import PageWrapper from "../PageWrapper";

const IndexPage = () => {
	return (
		<>
			<PageWrapper darkTheme>
				<Box>
					<Hero />
					<Works />
					<Contact />
				</Box>
			</PageWrapper>
		</>
	);
};
export default IndexPage;
