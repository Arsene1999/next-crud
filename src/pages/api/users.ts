import { v4 as uuidv4 } from "uuid";

export default function handler(req, res) {
  
  if(req.method === "GET") {
    res.status(200).json({
      data: [
      { name: 'Ana', idade: 31, id: uuidv4()},
      { name: 'Bia', idade: 45, id: uuidv4()},
      { name: 'Carlos', idade: 34, id: uuidv4()},
      { name: 'Pedro', idade: 23, id: uuidv4()}
    ]}
  )
  } else {
    res.status(405).send()
  }
}
