import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

const app = express();

// middlewares
app.use(cors());

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
}

// routes
app.get("/", (req, res) => res.send("Home Page"));
app.get("/user", (req, res) => res.send("User Page"));

// server
app.listen(
    process.env.SERVER_PORT,
    console.log(`Server listening on port: ${process.env.SERVER_PORT}`)
);
