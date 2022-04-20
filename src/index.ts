import express, { Request, Response, NextFunction } from "express";
import connectDB from "./Loader/db";

const app = express();
connectDB();
app.use(express.json());

app.use("/api", require("./router"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
}); 

const port: number = 8000;

app.listen(port, () => {
  console.log(`
    ###################################
      SERVER LISTENING ON PORT : ${port}
    ###################################`);
});