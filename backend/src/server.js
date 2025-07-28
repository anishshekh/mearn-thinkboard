import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import path from "path"


import notesRoute from "./router/notesRoute.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middelware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: ["http://localhost:5173", "https://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  }));
}


app.use(express.json()) //this middleware will parse JSON bodies: req.body
app.use(ratelimiter)

app.use("/api/notes", notesRoute)

if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
  })

}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

