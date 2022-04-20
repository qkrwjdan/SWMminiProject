import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: parseInt(process.env.PORT, 10),
  nodeEnv: process.env.NODE_ENV,
  mongoURI: process.env.MONGODB_URI,
};