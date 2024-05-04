const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})


app.listen(port, () => {
  console.log('Aplicação rodando na porta: ' + port)
})