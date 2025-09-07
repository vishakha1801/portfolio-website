import React, { useEffect } from "react";
const SubstackEmbed: React.FC<{ publication?: string }>= ({ publication = "your-substack" }) => {
useEffect(() => {
const id = "substack-widget-script";
if (document.getElementById(id)) return;
const s = document.createElement("script");
s.id = id; s.async = true; s.src = "https://substackapi.com/widget.js"; document.body.appendChild(s);
}, []);
return <div className="glass pop-glow rounded-xl p-4" data-widget="substack" data-substack={publication}></div>;
};
export default SubstackEmbed;