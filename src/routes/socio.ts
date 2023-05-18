import { Router } from "express";
import {SocioModel} from "../models/Socio";
import { QRModel } from "../models/QR";
const QRCode = require("qrcode");
const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const socios = await SocioModel.find().exec();
    return res.json(socios);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const socio  = req.body;
    const newSocio = await SocioModel.create(socio);
    const newQr = await QRModel.create({
                                          "idSocio" : newSocio._id,
                                          "img" : await QRCode.toDataURL("expressjs-mongoose-production-14de.up.railway.app/socios/payments/"+ newSocio._id.toString())
    }) 
    return res.status(201).json(newSocio);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.get("/payments/:id" ,async (req, res) => {
  const {id} = req.params; 
  try {
    const socio = await SocioModel.findById(id);
    return res.json(socio.bills);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
})

routes.post("/payments/:id",async (req, res) => {
  const {id} = req.params; 
  const body = req.body;
  try {
    const socio = await SocioModel.findById(id);
    socio["bills"].push(body);
    await SocioModel.findOneAndUpdate({_id : id} , {$set : socio})
    return res.json(socio);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }

  
})

export default routes;
