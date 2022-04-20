import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
process.env.PORT = process.env.PORT || "3000";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

interface Config {
  port: number;
  nodeEnv: string;
  mongoURI: string;
}

const config : Config = {
    port: parseInt(process.env.PORT, 10),
    nodeEnv: process.env.NODE_ENV,
    mongoURI: process.env.MONGODB_URI || "none",
}

export default config