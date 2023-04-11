const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Avabile Routes
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/notes', require('./Routes/notes'))
app.use('/api/data', require('./Routes/data'))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})