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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing1/Works.js")),
	{
		name: "landing1/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing1/Contact.js")),
	{
		name: "landing1/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing2/Hero.js")),
	{
		name: "landing2/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing2/Works.js")),
	{
		name: "landing2/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/landing2/CTA.js")),
	{
		name: "landing2/CTA",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			{
				name: "imgSrc",
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
				friendlyName: "image",
				type: "file",
				allowedFileTypes: ["png", "jpg", "webp"],
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
	dynamic(() => import("../sections/landing3/Hero.js")),
	{
		name: "landing3/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			{
				name: "description",
				type: "text",
				defaultValue:
					"You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
				required: true,
			},
			{
				name: "imgSrc",
				defaultValue: "../assets/image/jpg/portfolio-about-3.jpg",
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
	dynamic(() => import("../sections/landing3/Works.js")),
	{
		name: "landing3/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing3/Contact.js")),
	{
		name: "landing3/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			,
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
	dynamic(() => import("../sections/landing4/Hero.js")),
	{
		name: "landing4/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing4/Works.js")),
	{
		name: "landing4/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/landing4/CTA.js")),
	{
		name: "landing4/CTA",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing5/Hero.js")),
	{
		name: "landing5/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing5/Works.js")),
	{
		name: "landing5/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "buttonText",
				type: "string",
				required: true,
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/landing5/CTA.js")),
	{
		name: "landing5/CTA",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing6/Hero.js")),
	{
		name: "landing6/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/landing6/Works.js")),
	{
		name: "landing6/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/landing6/Contact.js")),
	{
		name: "landing6/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing8/Hero.js")),
	{
		name: "landing8/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/landing8/Works.js")),
	{
		name: "landing8/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/landing8/Contact.js")),
	{
		name: "landing8/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-2-column/Hero.js")),
	{
		name: "masonry-2-column/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-2-column/Works.js")),
	{
		name: "masonry-2-column/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
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
	dynamic(() => import("../sections/masonry-2-column/Contact.js")),
	{
		name: "masonry-2-column/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-3-column/Hero.js")),
	{
		name: "masonry-3-column/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
			{
				name: "href",
				friendlyName: "link",
				type: "url",
			},
		],
	}
);
Builder?.registerComponent(
	dynamic(() => import("../sections/masonry-3-column/Works.js")),
	{
		name: "masonry-3-column/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/masonry-3-column/Contact.js")),
	{
		name: "masonry-3-column/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-3-column-fluid/Hero.js")),
	{
		name: "masonry-3-column-fluid/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-3-column-fluid/Works.js")),
	{
		name: "masonry-3-column-fluid/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "I am a React + Tailwind component!",
			},
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
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
	dynamic(() => import("../sections/masonry-3-column-fluid/Contact.js")),
	{
		name: "masonry-3-column-fluid/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-4-column/Hero.js")),
	{
		name: "masonry-4-column/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-4-column/Works.js")),
	{
		name: "masonry-4-column/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
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
	dynamic(() => import("../sections/masonry-4-column/Contact.js")),
	{
		name: "masonry-4-column/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-4-column-fluid/Hero.js")),
	{
		name: "masonry-4-column-fluid/Hero",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/masonry-4-column-fluid/Works.js")),
	{
		name: "masonry-4-column-fluid/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
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
	dynamic(() => import("../sections/masonry-4-column-fluid/Contact.js")),
	{
		name: "masonry-4-column-fluid/Contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/grid-2/Hero.js")),
	{
		name: "grid-2/Hero.js",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/grid-2/Works.js")),
	{
		name: "grid-2/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/grid-3/Hero.js")),
	{
		name: "grid-3/Hero.js",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/grid-3/Works.js")),
	{
		name: "grid-3/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/grid-3-fluid/Hero.js")),
	{
		name: "grid-3-fluid/Hero.js",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/grid-3-fluid/Works.js")),
	{
		name: "grid-3-fluid/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/grid-4/Hero.js")),
	{
		name: "grid-4/Hero.js",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/grid-4/Works.js")),
	{
		name: "grid-4/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
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
	dynamic(() => import("../sections/grid-4-fluid/Hero.js")),
	{
		name: "grid-4-fluid/Hero.js",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../sections/grid-4-fluid/Works.js")),
	{
		name: "grid-4-fluid/Works",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
		inputs: [
			{
				name: "buttonText",
				type: "text",
				defaultValue: "Load more works",
				required: true,
			},

			{
				name: "imgSrc",
				defaultValue: "../assets/image/jpg/portfolio-about-2.jpg",
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
//components starts here
Builder?.registerComponent(
	dynamic(() => import("../components/builder/grid-3.js")),
	{
		name: "grid-3",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../components/builder/grid-2.js")),
	{
		name: "grid-2",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../components/builder/contact.js")),
	{
		name: "contact",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
	dynamic(() => import("../components/builder/about.js")),
	{
		name: "about",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
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
