import { NextApiRequest, NextApiResponse } from "next"
import { contacts } from "../../../../utils/connections"
import { ResponseFuncs } from "../../../../utils/types"
import mongoose from "mongoose"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Contacts } = await contacts();
      const contact = await Contacts.find({}).catch();
      res.json({ status: 200, data: contact });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { Contacts } = await contacts() // connect to database
        res.json(await Contacts.create(req.body).catch(catcher))
        console.log(mongoose.connection.close());
      } catch (error) {
        res.json(error);
        res.status(405).end();
        console.log(mongoose.connection.close());
      }
      
    },
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler