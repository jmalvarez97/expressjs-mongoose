import "./lib/db";
var cors = require('cors')
import express from "express";
import socioRoutes from "./routes/socio";
import qrRoutes from "./routes/qr";


const app = express();
const port = process.env.PORT || 3333;

app.use(cors())

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.use("/socio", socioRoutes);
app.use("/qr", qrRoutes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
