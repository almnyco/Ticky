"use client";

import dynamic from "next/dynamic";

const SharedTasks = dynamic(() => import("src/pages/SharedTasks"), {
  ssr: false,
});

export default SharedTasks;
