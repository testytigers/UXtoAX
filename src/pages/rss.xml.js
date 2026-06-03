export async function GET({ site }) {
  const postModules = import.meta.glob('../content/blog/*.mdx', { eager: true });
  const posts = Object.values(postModules)
    .map(m => m.frontmatter)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const items = posts.map(p => `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${site}blog/${p.slug}/</link>
    <description><![CDATA[${p.description}]]></description>
    <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
    <guid isPermaLink="true">${site}blog/${p.slug}/</guid>
    ${p.category ? `<category>${p.category}</category>` : ''}
  </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>uxintoax.com — Agent Experience Design Blog</title>
    <link>${site}</link>
    <description>Articles for UX designers navigating the AI era.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site}rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${site}og/default.svg</url>
      <title>uxintoax.com</title>
      <link>${site}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
