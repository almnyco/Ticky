"use client";

import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("src/pages/SignUp"), {
  ssr: false,
});

export default SignUp;
