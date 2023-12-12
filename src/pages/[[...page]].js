import {
	Builder,
	BuilderComponent,
	builder,
	useIsPreviewing,
} from "@builder.io/react";
import dynamic from "next/dynamic";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
// Replace with your Public API Key
builder.init("09a11d8cc20040d29129a6a0b0cec619");

// Define a function that fetches the Builder
// content for a given page
export async function getStaticProps({ params, locale }) {
	// Fetch the builder content for the given page

	const page = await builder
		.get("page", {
			userAttributes: {
				urlPath:
					params && Array.isArray(params?.page) && params.page.length > 0
						? "/" + params.page.join("/")
						: "/", // Make sure the index page has a urlPath of '/'
			},
		})
		.toPromise();

	// Return the page content as props
	return {
		props: {
			page: page || null,
			locale: locale || null,
		},
		// Revalidate the content every 5 seconds
		revalidate: 5,
	};
}

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
	const pages = await builder.getAll("page", {
		fields: "data.url",
		options: { noTargeting: true },
	});

	const uniquePaths = Array.from(
		new Set(pages.map((page) => `${page.data?.url}`.trim()))
	).filter((url) => url !== "/");

	return {
		paths: uniquePaths,
		fallback: "blocking",
	};
}

Builder?.registerComponent(
	dynamic(() => import("../sections/landing1/Hero.js")),
	{
		name: "landing1/Hero",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 12l-2 0l9 -9l9 9l-2 0' /%3E%3Cpath d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "dynamicText",
				type: "string",
				required: true,
				defaultValue: "ILLUSTRATOR, GRAPHIC DESIGNER, TRAVELER",
			},
			{
				name: "descriptionText",
				type: "text",
				defaultValue: "I design digital crafts for clients.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Explore works",
				required: true,
			},

			{
				name: "imgSrc",
				defaultValue: "../assets/image/png/portrait-1.png",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing1/Works.js")),
	{
		name: "landing1/Works",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 12l-2 0l9 -9l9 9l-2 0' /%3E%3Cpath d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc9",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc10",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc11",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc12",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc13",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc14",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-16.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-14.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-13.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-16.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing1/Contact.js")),
	{
		name: "landing1/Contact",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 12l-2 0l9 -9l9 9l-2 0' /%3E%3Cpath d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "AVAILABLE FOR FREELANCE PROJECTS",
			},
			{
				name: "description",
				type: "text",
				defaultValue: "Do you have illustration project? Let's talk.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing2/Hero.js")),
	{
		name: "landing2/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-check' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2' /%3E%3Cpath d='M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.525' /%3E%3Cpath d='M15 19l2 2l4 -4' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "HI, I AM BRUCE RYAN",
			},
			{
				name: "description1",
				type: "text",
				defaultValue: "Full Stack UX Designer",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "who loves nature!",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue: "../assets/image/jpg/portfolio-about-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing2/Works.js")),
	{
		name: "landing2/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-check' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2' /%3E%3Cpath d='M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.525' /%3E%3Cpath d='M15 19l2 2l4 -4' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing2/CTA.js")),
	{
		name: "landing2/CTA",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-check' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2' /%3E%3Cpath d='M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.525' /%3E%3Cpath d='M15 19l2 2l4 -4' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue:
					"I am taking new projects. Waiting to hearing about new projects, so if you'd like to chat please get in touch.",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			{
				name: "href1",
				defaultValue: "contact@folio.design",
				friendlyName: "link",
				type: "url",
			},
			{
				name: "href2",
				defaultValue: "linkedin.com/folio",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing3/Hero.js")),
	{
		name: "landing3/Hero",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-eco' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215' /%3E%3Cpath d='M16 22s0 -2 3 -4' /%3E%3Cpath d='M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Complete Solution for SaaS Business.",
			},
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Let's Talk Now",
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			{
				name: "imgSrc",
				defaultValue: "../assets/image/jpg/portfolio-about-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing3/Works.js")),
	{
		name: "landing3/Works",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-eco' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215' /%3E%3Cpath d='M16 22s0 -2 3 -4' /%3E%3Cpath d='M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "UI Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "App Developement",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Web Developement",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/dev/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing3/Contact.js")),
	{
		name: "landing3/Contact",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-eco' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215' /%3E%3Cpath d='M16 22s0 -2 3 -4' /%3E%3Cpath d='M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Ready to talk?",
			},
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Let's Talk Now",
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
			,
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing4/Hero.js")),
	{
		name: "landing4/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-heart' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304' /%3E%3Cpath d='M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Code. Eat. Sleep.",
			},
			{
				name: "description1",
				type: "text",
				defaultValue:
					"I create meaningful solutions for your brands and products.",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "Give your customers the best experience possible.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Check latest works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing4/Works.js")),
	{
		name: "landing4/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-heart' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304' /%3E%3Cpath d='M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z' /%3E%3C/svg%3E",
		inputs: [
			// {
			// 	name: "title",
			// 	type: "string",
			// 	required: true,
			// 	defaultValue: "I am a React + Tailwind component!",
			// },
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing4/CTA.js")),
	{
		name: "landing4/CTA",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-heart' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304' /%3E%3Cpath d='M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Give your product a shape",
			},
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Let's Talk Now",
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing5/Hero.js")),
	{
		name: "landing5/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2' /%3E%3Cpath d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3Cpath d='M20.2 20.2l1.8 1.8' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Best digital design agency in New York",
			},
			{
				name: "description1",
				type: "text",
				defaultValue: "We create solutions",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "for your brands",
				required: true,
			},
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Explore works",
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing5/Works.js")),
	{
		name: "landing5/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2' /%3E%3Cpath d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3Cpath d='M20.2 20.2l1.8 1.8' /%3E%3C/svg%3E",
		inputs: [
			// {
			// 	name: "title",
			// 	type: "string",
			// 	required: true,
			// 	defaultValue: "I am a React + Tailwind component!",
			// },
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Load more works",
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing5/CTA.js")),
	{
		name: "landing5/CTA",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2' /%3E%3Cpath d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3Cpath d='M20.2 20.2l1.8 1.8' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue:
					"We are taking new projects. Waiting to hearing from you, so if you'd like to chat please get in touch.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing6/Hero.js")),
	{
		name: "landing6/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-question' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428' /%3E%3Cpath d='M19 22v.01' /%3E%3Cpath d='M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "A full-service innovative agency",
			},
			{
				name: "description1",
				type: "text",
				defaultValue:
					"I create meaningful solutions for your brands and products.",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "Give your customers the best experience possible.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Check Latest Works",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue: "../assets/image/png/portrait-2.png",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing6/Works.js")),
	{
		name: "landing6/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-question' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428' /%3E%3Cpath d='M19 22v.01' /%3E%3Cpath d='M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483' /%3E%3C/svg%3E",

		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc9",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc10",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc11",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc12",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc13",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc14",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-16.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-14.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-13.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-16.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/agency/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing6/Contact.js")),
	{
		name: "landing6/Contact",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-question' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428' /%3E%3Cpath d='M19 22v.01' /%3E%3Cpath d='M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue:
					"Looking for a team to start? You are at the right place.",
			},
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Let's Talk Now",
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing8/Hero.js")),
	{
		name: "landing8/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-edit' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78' /%3E%3Cpath d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4' /%3E%3Cpath d='M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "FROM CALIFORNIA",
			},
			{
				name: "description1",
				type: "text",
				defaultValue: "Professional photography",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "for your products.",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing8/Works.js")),
	{
		name: "landing8/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-edit' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78' /%3E%3Cpath d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4' /%3E%3Cpath d='M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc9",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc10",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc11",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc12",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc13",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-13.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc14",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-14.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc15",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc16",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-16.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-16.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-13.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-11.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-14.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc9",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-15.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/photo/masonry/portfolio-mas-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing8/Contact.js")),
	{
		name: "landing8/Contact",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home-edit' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78' /%3E%3Cpath d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4' /%3E%3Cpath d='M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title1",
				type: "string",
				required: true,
				defaultValue: "Looking for a photographer?",
			},
			{
				name: "title2",
				type: "string",
				required: true,
				defaultValue: "Get in touch and let's chat!",
			},
			{
				name: "href1",
				defaultValue: "contact@folio.design",
				friendlyName: "link",
				type: "url",
			},
			{
				name: "href2",
				defaultValue: "linkedin.com/folio",
				friendlyName: "link",
				type: "url",
			},
		
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-2-column/Hero.js")),
	{
		name: "masonry-2-column/Hero",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-template' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 12l6 0' /%3E%3Cpath d='M14 16l6 0' /%3E%3Cpath d='M14 20l6 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Let's solve your design problems.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Explore works",
				required: true,
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-2-column/Works.js")),
	{
		name: "masonry-2-column/Works",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-template' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 12l6 0' /%3E%3Cpath d='M14 16l6 0' /%3E%3Cpath d='M14 20l6 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-2-column/Contact.js")),
	{
		name: "masonry-2-column/Contact",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-template' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 12l6 0' /%3E%3Cpath d='M14 16l6 0' /%3E%3Cpath d='M14 20l6 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Do you have illustration project? Let's talk.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
			
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column/Hero.js")),
	{
		name: "masonry-3-column/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-layout-rows' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M4 12l16 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "HI, I AM BRUCE RYAN",
			},
			{
				name: "description1",
				type: "text",
				defaultValue: "Full stack web developer",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "for your next project",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue: "../assets/image/jpg/portfolio-about-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column/Works.js")),
	{
		name: "masonry-3-column/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-layout-rows' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M4 12l16 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column/Contact.js")),
	{
		name: "masonry-3-column/Contact",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-layout-rows' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M4 12l16 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Do you have illustration project? Let's talk.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
		
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column-fluid/Hero.js")),
	{
		name: "masonry-3-column-fluid/Hero",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-triangle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "We solve your digital photography problem.",
			},
			{
				name: "description1",
				type: "text",
				defaultValue:
					"Looking for a group of photographers for your product promotion?",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "Our professional photographers are here to solve it.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Lets talk",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column-fluid/Works.js")),
	{
		name: "masonry-3-column-fluid/Works",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-triangle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column-fluid/Contact.js")),
	{
		name: "masonry-3-column-fluid/Contact",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-triangle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Do you have illustration project? Let's talk.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
			
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-4-column/Hero.js")),
	{
		name: "masonry-4-column/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-triangle-filled' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z' stroke-width='0' fill='currentColor' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I design digital crafts for my clients",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "See My works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-4-column/Works.js")),
	{
		name: "masonry-4-column/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-triangle-filled' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z' stroke-width='0' fill='currentColor' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-4-column/Contact.js")),
	{
		name: "masonry-4-column/Contact",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-triangle-filled' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z' stroke-width='0' fill='currentColor' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Do you have illustration project? Let's talk.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
			
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-4-column-fluid/Hero.js")),
	{
		name: "masonry-4-column-fluid/Hero",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-flipboard' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.973 3h16.054c.537 0 .973 .436 .973 .973v4.052a.973 .973 0 0 1 -.973 .973h-5.025v4.831c0 .648 -.525 1.173 -1.173 1.173h-4.829v5.025a.973 .973 0 0 1 -.974 .973h-4.053a.973 .973 0 0 1 -.973 -.973v-16.054c0 -.537 .436 -.973 .973 -.973z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "DEVELOPER FROM CALIFORNIA",
			},
			{
				name: "description1",
				type: "text",
				defaultValue: "Full stack web developer",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "for your next project",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Explore works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-4-column-fluid/Works.js")),
	{
		name: "masonry-4-column-fluid/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-flipboard' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.973 3h16.054c.537 0 .973 .436 .973 .973v4.052a.973 .973 0 0 1 -.973 .973h-5.025v4.831c0 .648 -.525 1.173 -1.173 1.173h-4.829v5.025a.973 .973 0 0 1 -.974 .973h-4.053a.973 .973 0 0 1 -.973 -.973v-16.054c0 -.537 .436 -.973 .973 -.973z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-1.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-7.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-3.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-5.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/masonry-image-2.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/masonry-image-8.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/masonry-image-4.jpg.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/masonry-image-6.jpgjpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},
			// {
			// 	name: "description",
			// 	type: "text",
			// 	defaultValue:
			// 		"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
			// 	required: true,
			// },
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-4-column-fluid/Contact.js")),
	{
		name: "masonry-4-column-fluid/Contact",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-flipboard' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.973 3h16.054c.537 0 .973 .436 .973 .973v4.052a.973 .973 0 0 1 -.973 .973h-5.025v4.831c0 .648 -.525 1.173 -1.173 1.173h-4.829v5.025a.973 .973 0 0 1 -.974 .973h-4.053a.973 .973 0 0 1 -.973 -.973v-16.054c0 -.537 .436 -.973 .973 -.973z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Do you have illustration project? Let's talk.",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Talk Now",
				required: true,
			},
		
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/grid-2/Hero.js")),
	{
		name: "grid-2/Hero.js",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-goldenratio' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 10h18' /%3E%3Cpath d='M3 14h18' /%3E%3Cpath d='M10 3v18' /%3E%3Cpath d='M14 3v18' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "ONE STEP AHEAD TOWARDS SOLUTIONS",
			},
			{
				name: "description",
				type: "text",
				defaultValue: "DESIGN. CODE. LIVE!",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Let's Discuss",
				required: true,
			},
			
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/grid-2/Works.js")),
	{
		name: "grid-2/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-goldenratio' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 10h18' /%3E%3Cpath d='M3 14h18' /%3E%3Cpath d='M10 3v18' /%3E%3Cpath d='M14 3v18' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},

		],
	}
);

Builder?.registerComponent(
	dynamic(() => import("../sections/grid-3/Hero.js")),
	{
		name: "grid-3/Hero.js",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-3x3' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 8h18' /%3E%3Cpath d='M3 16h18' /%3E%3Cpath d='M8 3v18' /%3E%3Cpath d='M16 3v18' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "HI, I AM BRIAN DEAN, FULL STACK DEVELOPER",
			},
			{
				name: "description",
				type: "text",
				defaultValue: "Let’s create thoughtful experiences for your brand.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Check my works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/grid-3/Works.js")),
	{
		name: "grid-3/Works",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-3x3' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 8h18' /%3E%3Cpath d='M3 16h18' /%3E%3Cpath d='M8 3v18' /%3E%3Cpath d='M16 3v18' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc9",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},

			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);

Builder?.registerComponent(
	dynamic(() => import("../sections/grid-3-fluid/Hero.js")),
	{
		name: "grid-3-fluid/Hero.js",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-4x4' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 6h18' /%3E%3Cpath d='M3 12h18' /%3E%3Cpath d='M3 18h18' /%3E%3Cpath d='M6 3v18' /%3E%3Cpath d='M12 3v18' /%3E%3Cpath d='M18 3v18' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Design solutions",
			},
			{
				name: "description1",
				type: "text",
				defaultValue:
					"I create meaningful solutions for your brands and products.",
				required: true,
			},
			{
				name: "description2",
				type: "text",
				defaultValue: "Give your customers the best experience possible.",
				required: true,
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Explore works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/grid-3-fluid/Works.js")),
	{
		name: "grid-3-fluid/Works",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-4x4' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 6h18' /%3E%3Cpath d='M3 12h18' /%3E%3Cpath d='M3 18h18' /%3E%3Cpath d='M6 3v18' /%3E%3Cpath d='M12 3v18' /%3E%3Cpath d='M18 3v18' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc9",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-12.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},

			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);

Builder?.registerComponent(
	dynamic(() => import("../sections/grid-4/Hero.js")),
	{
		name: "grid-4/Hero.js",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-dots' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "TEAM THAT SOLVES YOUR PROBLEMS",
			},
			{
				name: "description",
				type: "text",
				defaultValue: "Get designs for your digital products",
				required: true,
			},

			{
				name: "buttonText",
				type: "text",
				defaultValue: "Explore works",
				required: true,
			},
			
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/grid-4/Works.js")),
	{
		name: "grid-4/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-dots' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},

			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);

Builder?.registerComponent(
	dynamic(() => import("../sections/grid-4-fluid/Hero.js")),
	{
		name: "grid-4-fluid/Hero.js",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-layout-grid' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I design digital crafts for clients.",
			},

			{
				name: "buttonText",
				type: "text",
				defaultValue: "Explore works",
				required: true,
			},
			// {
			// 	name: "imgSrc",
			// 	defaultValue:
			// 		"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/grid-4-fluid/Works.js")),
	{
		name: "grid-4-fluid/Works",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-layout-grid' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "label1",
				type: "string",
				required: true,
				defaultValue: "All works",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc5",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc6",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc7",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc8",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label2",
				type: "string",
				required: true,
				defaultValue: "Branding",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-6.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label3",
				type: "string",
				required: true,
				defaultValue: "UX Design",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image-2.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-8.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-10.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},

			{
				name: "label4",
				type: "string",
				required: true,
				defaultValue: "Photography",
			},
			{
				name: "imgSrc1",
				defaultValue: "../assets/image/jpg/portfolio-image.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc2",
				defaultValue: "../assets/image/jpg/portfolio-image-3.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc3",
				defaultValue: "../assets/image/jpg/portfolio-image-7.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "imgSrc4",
				defaultValue: "../assets/image/jpg/portfolio-image-9.jpg",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},

			// {
			// 	name: "imgSrc",
			// 	defaultValue: "../assets/image/jpg/portfolio-about-2.jpg",
			// 	friendlyName: "image",
			// 	type: "file",
			// 	allowedFileTypes: ["png", "jpg", "webp"],
			// },
			// {
			// 	name: "href",
			// 	friendlyName: "link",
			// 	type: "url",
			// },
		],
	}
);
//components starts here
Builder?.registerComponent(
	dynamic(() => import("../components/builder/grid-3.js")),
	{
		name: "grid-3",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grip-horizontal' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3C/svg%3E",
		// inputs: [
		// 	{
		// 		name: "title",
		// 		type: "string",
		// 		required: true,
		// 		defaultValue: "I am a React + Tailwind component!",
		// 	},
		// 	{
		// 		name: "description",
		// 		type: "text",
		// 		defaultValue:
		// 			"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
		// 		required: true,
		// 	},
		// 	{
		// 		name: "imgSrc",
		// 		defaultValue:
		// 			"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
		// 		friendlyName: "image",
		// 		type: "file",
		// 		allowedFileTypes: ["png", "jpg", "webp"],
		// 	},
		// 	{
		// 		name: "href",
		// 		friendlyName: "link",
		// 		type: "url",
		// 	},
		// ],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/grid-2.js")),
	{
		name: "grid-2",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grip-horizontal' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3C/svg%3E",
		
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/contact.js")),
	{
		name: "contact",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grip-horizontal' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3Cpath d='M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /%3E%3C/svg%3E",
		
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/about.js")),
	{
		name: "about",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-tilde' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 12c0 -1.657 1.592 -3 3.556 -3c1.963 0 3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3s3.556 -1.343 3.556 -3' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/agency-1.js")),
	{
		name: "agency-1",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-components' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 12l3 3l3 -3l-3 -3z' /%3E%3Cpath d='M15 12l3 3l3 -3l-3 -3z' /%3E%3Cpath d='M9 6l3 3l3 -3l-3 -3z' /%3E%3Cpath d='M9 18l3 3l3 -3l-3 -3z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/agency-2.js")),
	{
		name: "agency-2",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-components' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 12l3 3l3 -3l-3 -3z' /%3E%3Cpath d='M15 12l3 3l3 -3l-3 -3z' /%3E%3Cpath d='M9 6l3 3l3 -3l-3 -3z' /%3E%3Cpath d='M9 18l3 3l3 -3l-3 -3z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/designer-2.js")),
	{
		name: "designer-2",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/devloper-2.js")),
	{
		name: "devloper-2",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/devloper-1.js")),
	{
		name: "devloper-1",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/grid-3-fluid.js")),
	{
		name: "grid-3-fluid",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/grid-4-fluid.js")),
	{
		name: "grid-4-fluid",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/grid-4.js")),
	{
		name: "grid-4",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/masonry-2-column.js")),
	{
		name: "masonry-2-column",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/masonry-3-column-fluid.js")),
	{
		name: "masonry-3-column-fluid",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/masonry-3-column.js")),
	{
		name: "masonry-3-column",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/masonry-4-column-fluid.js")),
	{
		name: "masonry-4-column-fluid",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/masonry-4-column.js")),
	{
		name: "masonry-4-column",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/photography-1.js")),
	{
		name: "photography-1",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/photography-2.js")),
	{
		name: "photography-2",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/portfolio-details-2.js")),
	{
		name: "portfolio-details-2",
		image:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../components/builder/portfolio-details.js")),
	{
		name: "portfolio-details",
		image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-keyframe' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z' /%3E%3C/svg%3E",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
			},
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
// Define the Page component
export default function Page({ page, locale }) {
	const router = useRouter();
	const isPreviewing = useIsPreviewing();

	// If the page is still being generated,
	// show a loading message
	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

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
				<title>{page?.data.title}</title>
			</Head>
			{/* Render the Builder page */}
			<BuilderComponent model="page" data={{ locale: locale }} content={page} />
		</>
	);
}
