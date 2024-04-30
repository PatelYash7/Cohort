import  express  from "express";

import { VALUE } from "@repo/common/config"
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World! " + VALUE);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});