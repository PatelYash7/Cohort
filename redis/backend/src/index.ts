import express from "express";
import { createClient } from "redis";


const app = express();
app.use(express.json());

const redisClient = createClient();
redisClient.on('error',console.error);


app.post("/submit", async (req, res) => {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;

    try {
        await redisClient.lPush("submissions", JSON.stringify({ code, language, problemId }));
        // Store in the database
        res.status(200).send("Submission received and stored.");
        console.log("Record Added")
    } catch (error) { 
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
});

async function startServer() {
    try {
        await redisClient.connect();
        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}
startServer();