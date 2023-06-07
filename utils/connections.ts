//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // users Schema
  const UsersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  })

  // users models
  const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema)

  return { conn, Users }
}