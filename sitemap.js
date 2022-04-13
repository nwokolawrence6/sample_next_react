const https = require('https');
const fs = require('fs');
const path = require('path');
const sitemap = require('nextjs-sitemap-generator');

sitemap({
    ignoreIndexFiles: true,
    baseUrl: 'https://cloudbooks.ng',
    pagesDirectory: path.join(__dirname, "pages"),
    targetDirectory : 'public/'
});
const defaultSiteMap = path.join(__dirname, 'public', 'sitemap.xml');

const siteMapRead = fs.readFileSync(defaultSiteMap, 'utf8');
fs.writeFileSync(defaultSiteMap, siteMapRead.replace('https://cloudbooks.ng/faq', 'https://auth.cloudbooks.ng'), 'utf8');
