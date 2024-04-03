const clientConnect = require('./index.js')

const client = clientConnect()

client.connect()
  .then(()=> client.query('SELECT * FROM gamecard WHERE isplaying = true')
  .then((result) => console.log(result.rows))
  .then(()=>client.end())
  )


