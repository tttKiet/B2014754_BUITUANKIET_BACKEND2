import express from "express";
import cors from "cors";
import contactsRouter from "./src/app/routes/contact.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to contact book aplication" });
});

export default app;
