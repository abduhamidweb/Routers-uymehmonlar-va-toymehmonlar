import express from 'express';
let app = express();
import toyrouter from "./router/users.router.js";
import uyrouter from "./router/uy.routes.js";
app.use("/toy", toyrouter);
app.use("/uy", uyrouter);
app.listen(5000, console.log("server listening on port " + 5000));





// import fs from 'fs';
// let datas = fs.readFileSync(process.cwd() + "/data/data.json", "utf-8") || "[]";
// datas = JSON.parse(datas)
// let arr = [F1, F2];
// app.use(express.json());
// app.use(express.text());
// app.post("/users", arr);
// function F1(req, res, next) {
//     if (req.body) return next();
//     res.send("xato")
// }
// function F2(req, res, next) {
//     datas.push(req.body);
//     fs.writeFileSync(process.cwd() + "/data/data.json", JSON.stringify(datas))
//     res.send("ok")
// }
// app.all("/users", (req, res) => {
//     res.send("All methods");
// });
// app.post("/users", (req, res) => {
//     datas.push(req.body);
//     fs.writeFileSync(process.cwd() + "/data/data.json", JSON.stringify(datas))
//     // console.log(req.params);
//     // console.log(req.body);
//     res.status(200).json({
//         a: "ok"
//     })
// });