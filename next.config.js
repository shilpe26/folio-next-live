const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
	withOptimizedImages({
		/* config for next-optimized-images */
		// your config for other plugins or the general next.js here...

		webpack(config, options) {
			// Add TypeScript extensions to resolve
			config.resolve.extensions.push(".ts", ".tsx");
			return config;
		},
	})
);
