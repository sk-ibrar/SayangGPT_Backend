const cors = require('cors');
const express = require("express");
const router = express.Router();
const deepseekRoutes = require("./deepSeekService");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", deepseekRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});