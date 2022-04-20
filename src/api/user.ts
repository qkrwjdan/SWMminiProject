import express, { Request, Response, Router } from "express";
import User from "../models/user";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  return res.status(200).json(users);
});

module.exports = router;
