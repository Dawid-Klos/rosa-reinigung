import React, { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      class={`hamburger hamburger--spin ${!isOpen && "is-active"}`}
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </button>
  );
}
