const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const BASE_URL = "https://www.tanjungkaryajaya.co.id";

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/profile", changefreq: "monthly", priority: 0.8 },
  { url: "/products", changefreq: "weekly", priority: 0.9 },
];

console.log("🔍 Pages to add in sitemap:", pages); // Debugging output

(async () => {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(path.join(__dirname, "public/sitemap.xml"));

  pages.forEach((page) => {
    console.log(`✅ Adding page: ${page.url}`); // Debugging output
    sitemapStream.write(page);
  });

  sitemapStream.end();

  streamToPromise(sitemapStream)
    .then(() => console.log("✅ Sitemap generated successfully!"))
    .catch((err) => console.error("❌ Error generating sitemap:", err));
})();
