//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Réussi (users)")
  
  // users Schema
  const UsersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    title: String,
    password: String,
  })
  
  // users models
  const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema)
  
  return { conn, Users }
}

export const newsLetter = async () => {
  const connLetter = await mongoose
  .connect(DATABASE_URL as string)
  .catch(err => console.log(err))
  console.log("Mongoose Réussi (newsLetter)")

  const LetterSchema = new mongoose.Schema({
    email: String
  })

  const Letter = mongoose.models.newsLetters || mongoose.model("newsLetters", LetterSchema)

  return {connLetter, Letter}
}


export const contacts = async () => {
  const connContact = await mongoose
  .connect(DATABASE_URL as string)
  .catch(err => console.log(err))
  console.log("Mongoose Réussi (contact)")

  const ContactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    title: String,
    descripiton: String
  })

  const contact = mongoose.models.contact || mongoose.model("contact", ContactSchema)

  return {connContact, contact}
}