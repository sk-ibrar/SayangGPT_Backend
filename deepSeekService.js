const express = require("express");
const router = express.Router();
const openai = require("./config");

router.post("/deepseek", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ message: "Query is required" }); 
    }

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        { 
        role: "user", 
        content: query,
        },
      ],
    });

    res.json( completion.choices[0].message.content );
  } catch (error) {
    res.status(500).json({
         error: error.message
         });
  }
});

module.exports = router;