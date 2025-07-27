import type { Configuration } from "webpack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [], // jeśli używasz zewnętrznych obrazów
    },
    webpack(config: Configuration) {
        config.module?.rules?.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
