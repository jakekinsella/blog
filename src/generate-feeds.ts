import fs from 'node:fs';

import * as Articles from './routes/articles';

const items = Articles.All.map((article) => {
  return `
    <item>
      <title>${article.Title}</title>
      <link>https://jakekinsella.com${article.Path}</link>
      <pubDate>${article.PostedAt.toUTCString()}</pubDate>
      <guid>https://jakekinsella.com${article.Path}</guid>
      <description>${article.Subtitle}</description>
    </item>`;
})

const feeds = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Jake Kinsella</title>
    <link>https://jakekinsella.com/</link>
    <description>Recent content on Jake Kinsella</description>
    <language>en-us</language>
    <copyright>Jake Kinsella</copyright>
    <lastBuildDate>${(new Date()).toUTCString()}</lastBuildDate>
    <atom:link href="https://jakekinsella-portfolio.s3.amazonaws.com/feeds.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;


fs.writeFileSync('feeds.xml', feeds);

export {};