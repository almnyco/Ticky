import { cookies } from "next/headers";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

function App() {
  const accessToken = cookies().get("accessToken");
  if (!accessToken) redirect("/signin");

  return <div className={styles.root_page_wrapper}>Olá!</div>;
}

export default App;
