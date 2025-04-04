import useFetch from "@/src/hooks/useFetch";
import React from "react";

function Settings() {
  const { fetchData } = useFetch();

  return (
    <div>
      <button onClick={() => fetchData()}>buscar</button>
    </div>
  );
}

export default Settings;
