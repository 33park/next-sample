/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		// Add file-loader for font files
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: {
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					publicPath: "/_next/public/fonts/",
					outputPath: `${isServer ? "../" : ""}public/fonts/`,
				},
			},
		});

		return config;
	},
};

export default nextConfig;
