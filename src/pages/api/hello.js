// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  if(req.method === "GET") {
    res.status(200).json({
      data: [
      { name: 'Ana', idade: 31, id: '7c36dc32-57bc-45e0-8ad7-ca1007c910ec'},
      { name: 'Bia', idade: 45, id: '03d61aa6-4995-4036-a9d1-2bfe69edd681'},
      { name: 'Carlos', idade: 34, id: 'aaed1b9f-7e49-4dc6-a071-2866f8a5c074'},
      { name: 'Pedro', idade: 23, id: 'eae4a556-051e-43b5-8592-9d2bec61f21d'}
    ]}
  )
  } else {
    res.status(405).send()
  }
}
