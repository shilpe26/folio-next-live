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
	// Get a list of all pages in Builder
	const pages = await builder.getAll("page", {
		// We only need the URL field
		fields: "data.url",
		options: { noTargeting: true },
	});

	// Generate the static paths for all pages in Builder
	return {
		paths: pages.map((page) => ({
			params: { page: page.data?.url?.slice(1).split("/") }, // Remove the leading slash and split the URL into an array of strings
		})),
		fallback: true,
	};
}
Builder?.registerComponent(
	dynamic(() => import("../sections/landing1/Hero.js")),
	{
		name: "landing1/Hero",
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
	dynamic(() => import("../sections/landing2/Hero.js")),
	{
		name: "landing2/Hero",
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
	dynamic(() => import("../sections/landing3/Hero.js")),
	{
		name: "landing3/Hero",
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
	dynamic(() => import("../sections/landing4/Hero.js")),
	{
		name: "landing4/Hero",
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
	dynamic(() => import("../sections/landing5/Hero.js")),
	{
		name: "landing5/Hero",
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
	dynamic(() => import("../sections/landing6/Hero.js")),
	{
		name: "landing6/Hero",
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
	dynamic(() => import("../sections/landing8/Hero.js")),
	{
		name: "landing8/Hero",
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
	dynamic(() => import("../sections/masonry-2-column/Hero.js")),
	{
		name: "masonry-2-column/Hero",
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
	dynamic(() => import("../sections/masonry-2-column/Works.js")),
	{
		name: "masonry-2-column/Works",
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
	dynamic(() => import("../sections/masonry-2-column/Contact.js")),
	{
		name: "masonry-2-column/Contact",
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
	dynamic(() => import("../sections/masonry-3-column/Hero.js")),
	{
		name: "masonry-2-column/Hero",
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
	dynamic(() => import("../sections/masonry-3-column/Works.js")),
	{
		name: "masonry-2-column/Works",
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
	dynamic(() => import("../sections/masonry-3-column/Contact.js")),
	{
		name: "masonry-2-column/Contact",
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
	dynamic(() => import("../sections/masonry-3-column-fluid/Hero.js")),
	{
		name: "masonry-3-column-fluid/Hero",
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
	dynamic(() => import("../sections/masonry-4-column/Hero.js")),
	{
		name: "masonry-4-column/Hero",
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
	dynamic(() => import("../sections/masonry-4-column/Works.js")),
	{
		name: "masonry-4-column/Works",
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
	dynamic(() => import("../sections/masonry-4-column/Contact.js")),
	{
		name: "masonry-3-column-fluid/Contact",
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
	dynamic(() => import("../sections/masonry-4-column-fluid/Hero.js")),
	{
		name: "masonry-4-column-fluid/Hero",
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
	dynamic(() => import("../sections/masonry-4-column-fluid/Works.js")),
	{
		name: "masonry-4-column-fluid/Works",
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
	dynamic(() => import("../sections/masonry-4-column-fluid/Contact.js")),
	{
		name: "masonry-4-column-fluid/Contact",
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
	dynamic(() => import("../pages/grid-3.js")),
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
	dynamic(() => import("../pages/grid-2.js")),
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
	dynamic(() => import("../pages/contact.js")),
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
	dynamic(() => import("../pages/about.js")),
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
	dynamic(() => import("../pages/agency-1.js")),
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
	dynamic(() => import("../pages/agency-2.js")),
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
	dynamic(() => import("../pages/designer-2.js")),
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
	dynamic(() => import("../pages/devloper-2.js")),
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
	dynamic(() => import("../pages/devloper-1.js")),
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
	dynamic(() => import("../pages/grid-3-fluid.js")),
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
	dynamic(() => import("../pages/grid-4-fluid.js")),
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
	dynamic(() => import("../pages/grid-4.js")),
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
	dynamic(() => import("../pages/masonry-2-column.js")),
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
	dynamic(() => import("../pages/masonry-3-column-fluid.js")),
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
	dynamic(() => import("../pages/masonry-3-column.js")),
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
	dynamic(() => import("../pages/masonry-4-column-fluid.js")),
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
	dynamic(() => import("../pages/masonry-4-column.js")),
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
	dynamic(() => import("../pages/photography-1.js")),
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
	dynamic(() => import("../pages/photography-2.js")),
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
	dynamic(() => import("../pages/portfolio-details-2.js")),
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
	dynamic(() => import("../pages/portfolio-details.js")),
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
