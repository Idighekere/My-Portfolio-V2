/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';

const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js configurations if necessary
};

export default withMDX({
  extension: /\.mdx?$/,

})({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
