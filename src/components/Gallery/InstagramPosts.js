import React from "react";

import igPosts from "./posts.json";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramPosts = igPosts.map((post) => {
  return (
    <div className="gallery__post" key={post.id}>
      <InstagramEmbed width={420} url={post.url} />
    </div>
  );
});

export default InstagramPosts;
