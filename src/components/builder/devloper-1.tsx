import React from "react";

import Contact from "../../sections/landing3/Contact";
import Hero from "../../sections/landing3/Hero";
import Works from "../../sections/landing3/Works";
import PageWrapper from "../PageWrapper";

const IndexPage = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				<Works />
				<Contact />
			</PageWrapper>
		</>
	);
};
export default IndexPage;
