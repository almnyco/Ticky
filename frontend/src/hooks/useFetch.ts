// import { useEffect } from 'react'


function useFetch() {


  const fetchData = () => {

    const data = fetch('http://localhost:9000/api/signin', {
      method: "post", body: JSON.stringify({ email: "teste@teste.com", password: "1234" }),
      headers: {
        "Content-Type": 'application/json'
      },
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

    return data;
  }


  return { fetchData }
}

export default useFetch