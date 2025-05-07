import { usePathname } from "next/navigation";
// import Link from "next/link";
import React, { Fragment } from "react";

function Breadcrumbs() {
  const paths = usePathname();

  const pathnames = paths?.split("/").filter((path) => path);

  return <Fragment>{pathnames}</Fragment>;
}

export default Breadcrumbs;
