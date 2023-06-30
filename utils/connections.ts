
import mongoose from "mongoose"

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
    email: {
      type: String,
      unique: true
    },
    password: String,
  }, {toJSON: {getters: true}})
  
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
  const connContacts = await mongoose
  .connect(DATABASE_URL as string)
  .catch(err => console.log(err))
  console.log("Mongoose Réussi (contact)")

  const ContactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    title: String,
    isdescripiton: String
  })

  const Contacts = mongoose.models.Contacts || mongoose.model("Contacts", ContactSchema)

  return {connContacts, Contacts}
}

export const products = async () => {
  const connProduct = await mongoose
  .connect(DATABASE_URL as string)
  .catch(error=> console.log(error))
  console.log("Mongoose Réussi (products)")

  const ProductSchema = new mongoose.Schema ({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
  })

  const Products = mongoose.models.Products || mongoose.model("Products", ProductSchema)

  return {connProduct, Products}
}