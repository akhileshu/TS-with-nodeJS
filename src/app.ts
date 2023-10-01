import express from "express";
import { value } from "./random.js";
import exampleRoute from './routes/exampleRoute.js';
// * imports are with .js ext not with .ts , its weird - in src,TS

const app = express();

app.get("/", (req, res) => res.send("lol and value is "+ value));
app.use('/api', exampleRoute);

app.listen(4000, () => console.log("server started"));
