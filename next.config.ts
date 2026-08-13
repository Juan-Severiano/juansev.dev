/**
 * Export every route as a ready-to-serve HTML file.
 *
 * This keeps the portfolio deployable on any static host, including Vercel.
 * Interactive client components still hydrate after the initial HTML loads.
 */
const nextConfig = {
  output: "export",
};

export default nextConfig;
