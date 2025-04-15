"use client";

import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("src/pages/SignIn"), {
  ssr: false,
});

export default SignIn;
