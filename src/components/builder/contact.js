import React from "react";

import Contact from "../../sections/others/Contact";
import { Box } from "../Core";
import PageWrapper from "../PageWrapper";

const ContactPage = () => {
	return (
		<>
			<PageWrapper darkTheme>
				<Box pt={4}>
					<Contact />
				</Box>
			</PageWrapper>
		</>
	);
};

export default ContactPage;
