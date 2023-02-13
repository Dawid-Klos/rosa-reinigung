import React from "react";

import igPosts from "./posts.json";

import { InstagramEmbed } from "react-social-media-embed";

const InstagramPosts = igPosts.map((post) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="gallery__post" key={post.id}>
      <InstagramEmbed
        style={{
          maxWidth: "90vw",
        }}
        width="100%"
        url={post.url}
      />
    </div>
  );
});

export default InstagramPosts;
