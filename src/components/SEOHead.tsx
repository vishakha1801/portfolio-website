import React from "react";
// If using Next.js, swap to: import Head from 'next/head'
const SEOHead: React.FC<{ title?: string; description?: string; url?: string }>= ({ title = "Vishakha Pathak — Portfolio", description = "Engineer & artist crafting human‑centered products.", url = "https://your-domain.com" }) => (
<>
<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
"@context":"https://schema.org","@type":"Person","name":"Vishakha Pathak","url":url,"sameAs":["https://www.linkedin.com/in/vishakha-pathak","https://github.com/"]
})}} />
<link rel="icon" href="/favicon.ico" />
{/* Include the font once in _document.html or index.html */}
</>
);
export default SEOHead;