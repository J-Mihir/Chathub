const axios = require('axios')
const express = require("express");
const cors = require("cors");
// to call the server from any other origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r =await axios.put(
    'https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-Key":"b4a128dd-bd72-4089-abf7-5afe62e5c2da"}}
    )
    return res.status(r.status).json(r.data)
  }catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
//users:20ce1283-1480-4941-8e86-01e5ce61ddaa
});

app.listen(3001);
