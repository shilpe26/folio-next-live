import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

// Replace with your Public API Key
builder.init("09a11d8cc20040d29129a6a0b0cec619");

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps = async ({ params }) => {
	// Fetch the builder content for the given page
	const page = await builder
		.get("page", {
			userAttributes: {
				urlPath: "/" + (params?.page?.join("/") || ""),
			},
		})
		.toPromise();

	// Return the page content as props
	return {
		props: {
			page: page || null,
		},
		// Revalidate the content every 5 seconds
		revalidate: 5,
	};
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
	// Get a list of all pages in Builder
	const pages = await builder.getAll("page", {
		// We only need the URL field
		fields: "data.url",
		options: { noTargeting: true },
	});

	// Generate the static paths for all pages in Builder
	return {
		paths: pages
			.map((page) => `${page.data?.url}`)
			.filter((url) => url !== "/"),
		fallback: "blocking",
	};
}

// Define the Page component
export default function Page({ page }) {
	const router = useRouter();
	const isPreviewing = useIsPreviewing();

	// If the page content is not available
	// and not in preview mode, show a 404 error page
	if (!page && !isPreviewing) {
		return <DefaultErrorPage statusCode={404} />;
	}

	// If the page content is available, render
	// the BuilderComponent with the page content
	return (
		<>
			<Head>
				<title>{page?.data?.title}</title>
			</Head>
			{/* Render the Builder page */}
			<BuilderComponent model="page" content={page || undefined} />
		</>
	);
}
