require("dotenv").config();
const connectDB = require("./db");
const express = require("express");
const authenticate = require("./middleware/authenticate");
const routers = require("./routes")

const app = express();
app.use(express.json());

app.use(routers)


app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

app.get("/privet",authenticate, (req, res) => {
  res.status(200).json({ message: "I am privet route" });
  console.log('i am request user: ',req.user)
});

app.get("/public", (req, res) => {
  res.status(200).json({ message: "I am public route" });
});
app.use((err, _req, res, _next) => {
    const message = err.message ? err.message: "Server error"
    const status = err.status ? err.status: 500
  res.status(status).json({message});
});

connectDB("mongodb://127.0.0.1:27017/attendance_system")
  .then(() => {
    console.log("Database connected");
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((e) => console.log(e));
