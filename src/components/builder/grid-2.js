import React from "react";

import Contact from "../../sections/common/Contact";
import Hero from "../../sections/grid-2/Hero";
import Works from "../../sections/grid-2/Works";
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
