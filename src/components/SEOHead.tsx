import React from "react";
// If using Next.js, swap to: import Head from 'next/head'
const DEFAULT_TITLE = "Vishakha";
const DEFAULT_DESCRIPTION = "Product designer & engineer crafting luminous, human stories inside digital products.";
const DEFAULT_URL = "https://vishakhapathak.com/";
const DEFAULT_IMAGE = "https://vishakhapathak.com/og-image.png";

const SEOHead: React.FC<{ title?: string; description?: string; url?: string; image?: string }>= ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
}) => (
<>
<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:image" content={image} />
<meta property="og:site_name" content="Vishakha" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
"@context":"https://schema.org","@type":"Person","name":"Vishakha Pathak","url":url,"sameAs":["https://www.linkedin.com/in/vishakha-pathak-b6643b20a/","https://github.com/vishakha1801","https://x.com/Vishakha1801"]
})}} />
<link rel="icon" type="image/png" href="/icon.png" />
{/* Include the font once in _document.html or index.html */}
</>
);
export default SEOHead;
