"use client";

import dynamic from "next/dynamic";

const MyTasks = dynamic(() => import("src/pages/MyTasks"), {
  ssr: false,
});

export default MyTasks;
