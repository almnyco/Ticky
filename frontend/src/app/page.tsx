import { cookies } from "next/headers";
// import styles from "./page.module.css";
import { redirect } from "next/navigation";

async function App() {
  const accessToken = (await cookies()).get("accessToken");
  if (!accessToken) redirect("/signin");

  return <div>Olá!</div>;
}

export default App;
