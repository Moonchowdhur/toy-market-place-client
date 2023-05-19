import React, { useEffect } from "react";

const Hooks = (title) => {
  useEffect(() => {
    document.title = `DollsHaunter|${title}`;
  }, [title]);
};

export default Hooks;
