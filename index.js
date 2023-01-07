const express = require('express')
const app = express()
const port = process.env.PORT||80

app.use('*', (req,res) => {
  res.json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params
    })
    .end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})