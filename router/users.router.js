import express from "express";
const toyrouter = express.Router();
toyrouter.get("/mehmonlar", (req, res) => {
        res.send({
            a: "a"
        })
    })
    .get("/mehmonlar/:id", () => {})
    .post("/mehmonlar", () => {})
    .delete("/mehmonlar/:id", () => {})
export default toyrouter