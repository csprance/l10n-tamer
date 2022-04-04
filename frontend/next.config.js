const path = require('path');
/** @type {import('next').NextConfig} */

// Bring in our env file from the project root folder
require('dotenv').config({ path: '../.env' });
console.log(
  `info  - Loaded .env file from ${path.resolve(`${__dirname}/../.env`)}`,
);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
});
