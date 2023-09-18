import express from "express";
import cors from "cors";
import contactsRouter from "./src/app/routes/contact.route";
import ApiError from "./src/app/api-error";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  // Page not found
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  // Middleware handler public error
  return res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;
