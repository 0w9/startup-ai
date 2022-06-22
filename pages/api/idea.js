// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config()
export default function handler(req, res) {

  let keyword = req.query.keyword;

  fetch("https://api.openai.com/v1/completions", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_KEY}`
    },
    "body": `{\"model\":\"text-davinci-002\",\"prompt\":\"Create a startup idea with the keyword ${keyword}.\",\"temperature\":0.89,\"max_tokens\":150,\"top_p\":1,\"frequency_penalty\":0,\"presence_penalty\":0}`
  }).then(data => data.json()).then(data => {
    res.status(200).json({ idea: data.choices[0].text })
  })
}
