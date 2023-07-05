import { Router } from "express";
import { QRModel } from "../models/QR";

const QRCode = require("qrcode");
const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const qrs = await QRModel.find().exec();
    return res.json(qrs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.get("/:id" ,async (req, res) => {
    const {id} = req.params; 
    try {
      const qr = await QRModel.findById(id);
      return res.json(qr);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Sorry, something went wrong :/" });
    }
  })

routes.post("/", async (req, res) => {
//   try {
//     const socio  = req.body;
//     const newSocio = await SocioModel.create(socio);
//     const newQr = await QRModel.create({
//                                           "idSocio" : newSocio._id,
//                                           "img" : await QRCode.toDataURL("expressjs-mongoose-production-14de.up.railway.app/socios/payments/"+ newSocio._id.toString())
//     }) 
//     return res.status(201).json(newSocio);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Sorry, something went wrong :/" });
//   }
 });
export default routes;
