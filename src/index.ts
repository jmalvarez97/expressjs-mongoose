import "./lib/db";
import express from "express";
import socioRoutes from "./routes/socio";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.use("/socios", socioRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
