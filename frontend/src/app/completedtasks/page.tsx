"use client";

import dynamic from "next/dynamic";

const CompletedTasks = dynamic(() => import("src/pages/CompletedTasks"), {
  ssr: false,
});

export default CompletedTasks;
