// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data={
  name:String;
}
/**El tipo type permite definir el tipo de objeto inteface que se 
 * va a retornar, esto para que sea mas estricto la forma como
 * se maneja las respuestas de laas api res
 */
export default function handler(req:NextApiRequest, res:NextApiResponse<Data> ) {
  res.status(200).json({ name: 'John Doe'})
}
