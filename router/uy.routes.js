import express from "express";
const uyrouter = express.Router();
uyrouter.get("/mehmonlar", (req, res) => {
    // console.log(req.query);
        res.send({
            a: "Uyga keling"
        })
    })
    .get("/mehmonlar/:id", () => {})
    .post("/mehmonlar", () => {})
    .delete("/mehmonlar/:id", () => {})
export default uyrouter