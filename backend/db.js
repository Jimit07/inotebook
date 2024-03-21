// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://localhost:27017/inotebook'

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }

// module.exports = connectToMongo;

const mongoose = require('mongoose');
const express = require('express')
var cors = require('cors')


async function connectToMongo() {
  try {
    await mongoose.connect('mongodb://localhost:27017/inotebook', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error:', error);
  }
}

connectToMongo();

//  index.js
const app = express()
const port = 5000

app.use(cors())

//  app.get('/', (req, res) => {
//    res.send('Hello World!')
//  })

//If we want to use request.body in auth or any where then we have to use an middleware so we can deal in json
app.use(express.json());

//Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})


 
