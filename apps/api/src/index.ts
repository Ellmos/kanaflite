import express from 'express';

const port = 3000
const app = express();

app.get("/", (_req, res) => {
  res.send("hello bitch");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
