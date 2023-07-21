const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/sound/:name", function (req, res) {
  // 파람스
  // const q = req.params;
  // console.log(q.id);
  // res.json({ userid: q.id });
  // 쿼리
  // const q = req.query;
  // console.log(q.name);
  // 포스트방식
  // const b = req.body;
  // console.log(b);
  const { name } = req.params;
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알수없음" });
  }

  console.log(name);
});
app.get("/cat", function (req, res) {
  res.send("고양이");
});

app.listen(port, () => {
  console.log(`Example app ${port}`);
});
