const UseAPI = async () => {
  const array = []
  const uuid = ["dade69b4-4f5a-8528-247b-219e5a1facd6",
	              "5f8d3a7f-467b-97f3-062c-13acf203c006",
                "f94c3b30-42be-e959-889c-5aa313dba261",
                "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
                "601dbbe7-43ce-be57-2a40-4abd24953621",
                "6f2a04ca-43e0-be17-7f36-b3908627744d",
                "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
                "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
                "1e58de9c-4950-5125-93e9-a0aee9f98746",
                "707eab51-4836-f488-046a-cda6bf494859",
                "eb93336a-449b-9c1b-0a54-a891f7921d69",
                "41fb69c1-4189-7b37-f117-bcaf1e96f1bf"
              ]
  
  for (let i = 0; i < 12; i++) {
    const url = `https://valorant-api.com/v1/agents/${uuid[i]}`
    const response = await fetch(url)
    const agents = await response.json()
    const id = i;
    const name = agents.data.displayName
    const image = agents.data.displayIcon
    array.push({ id, name, image })
  }
  
  return array
}

export default UseAPI