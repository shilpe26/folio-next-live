import React from "react";

import About from "../../sections/others/About";
import { Box } from "../Core";
import PageWrapper from "../PageWrapper";

const AboutPage = () => {
	return (
		<>
			<PageWrapper darkTheme>
				<Box pt={4}>
					<About />
				</Box>
			</PageWrapper>
		</>
	);
};

export default AboutPage;
