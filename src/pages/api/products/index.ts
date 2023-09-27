import { NextApiRequest, NextApiResponse } from "next"
import { products } from "../../../../utils/connections"
import { ResponseFuncs } from "../../../../utils/types"
import mongoose from "mongoose"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Products } = await products();
      const product = await Products.find({}).catch();
      res.json({ status: 200, data: product });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { Products } = await products() // connect to database
        res.json(await Products.create(req.body).catch(catcher))
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

export default handler;