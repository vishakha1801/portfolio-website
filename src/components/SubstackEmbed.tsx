import React from "react";

type Props = {
  publication?: string;
  height?: number;
};

const SubstackEmbed: React.FC<Props> = ({ publication = "vishakhapathak", height = 180 }) => {
  const src = publication
    ? `https://${publication}.substack.com/embed`
    : "https://substack.com/embed";
  return (
    <div className="glass pop-glow rounded-xl p-0 overflow-hidden">
      <iframe
        src={src}
        className="w-full"
        style={{ height }}
        frameBorder="0"
        scrolling="no"
        title="Subscribe to Substack"
      />
    </div>
  );
};

export default SubstackEmbed;
