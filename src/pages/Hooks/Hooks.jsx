import React, { useEffect } from "react";

const Hooks = (title) => {
  useEffect(() => {
    document.title = `ToyTown|${title}`;
  }, [title]);
};

export default Hooks;
