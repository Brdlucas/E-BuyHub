import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../../../utils/connections"
import { ResponseFuncs } from "../../../../utils/types"
import mongoose from "mongoose"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error })

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { Users } = await connect() // connection a la base de données
        res.json(await Users.find({}).catch(catcher))        
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    },
    // RESPONSE POST REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { Users } = await connect() // connect to database
        res.json(await Users.create(req.body).catch(catcher))
        console.log(mongoose.connection.close());
      } catch (error) {
        res.json(error);
        res.status(405).end();
        console.log(mongoose.connection.close());
      }
      
    },
  }

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler