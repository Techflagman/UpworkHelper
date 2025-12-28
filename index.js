const express = require('express');
require("dotenv").config();
const { sendMessageToSlack } = require("./send-message-to-slack");

const app = express();
const port = 8000;

// Route
app.get("/", async (req, res) => {
  try {
    const payload = {
      title: "Wordpress expert developer needed",
      description: "We are looking for a Wordpress expert developer for a new website with multilingual feature and payment gateway integration...",
      country: "United Kingdom",
      clientRate: "4.95 (1528 reviews)",
      totalSpent: "$250K",
      averageHourlyRate: "$34.7",
      clientTime: "9:31 AM",
      projectBudget: "$3600",
      replyUrl: "https://google.com",
    };

    await sendMessageToSlack(payload);

    res.status(200).send("This has worked!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send Slack message");
  }

});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
