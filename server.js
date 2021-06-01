const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const getBookData = require('./models/getdata');
const PORT = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.send('hello server.js');
});
app.get('/getdata', getBookData);
/*

app.put('/putdata' ,    putBookData);
app.post('/postdata',    postBookData);
app.delete('/deletedata', deleteBookData);

*/
















app.listen(PORT, () => {
  console.log(`you are listeinig on ${PORT}`);
})

