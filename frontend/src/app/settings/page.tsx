"use client";

import dynamic from "next/dynamic";

const Settings = dynamic(() => import("src/pages/Settings"), {
  ssr: false,
});

export default Settings;
