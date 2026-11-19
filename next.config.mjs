/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes a self-contained site to `out/`,
  // which can be uploaded to any shared host (TurkHosting Plesk httpdocs) without Node.js.
  output: "export",
  // Every route becomes `route/index.html`, so Apache serves clean URLs without rewrites.
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  poweredByHeader: false
};

export default nextConfig;
