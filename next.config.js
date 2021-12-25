// @ts-check
// Blatantly copied from  https://github.com/heypoom/poom.dev/blob/master/next.config.js

/** @type {import('next').NextConfig} */
const config = {}

const withPreact = require("next-plugin-preact")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

module.exports = {
	...withBundleAnalyzer(withPreact(config)),
	images: {
		domains: ["images.contentful.com", "images.ctfassets.net"]
	},
	webpack(config) {
		config.plugins.push(
			// @ts-ignore
			require("unplugin-icons/webpack")({
				compiler: "jsx",
				jsx: "react",
			})
		);

		return config;
	}
}