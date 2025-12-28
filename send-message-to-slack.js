const { App } = require("@slack/bolt");

const slackApp = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Build Slack blocks using params */
function buildInviteBlocks({
  title,
  description,
  country,
  clientRate,
  totalSpent,
  averageHourlyRate,
  clientTime,
  projectBudget,
  replyUrl,
}) {
  return [
    {
      type: "rich_text",
      elements: [
        {
          type: "rich_text_section",
          elements: [
            {
              type: "text",
              text: "📢 A new invitation receival on your Upwork account! Reply fast!",
              style: { bold: true },
            },
          ],
        },
      ],
    },
    { type: "divider" },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${title}*\n${description}`,
      },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*🌍  Country:* ${country}` },
        { type: "mrkdwn", text: `*⭐   Client Rate:* ${clientRate}` },
        { type: "mrkdwn", text: `*💰  Total Spent:* ${totalSpent}` },
        { type: "mrkdwn", text: `*💵  Average Hourly Rate:* ${averageHourlyRate}` },
        { type: "mrkdwn", text: `*🕒  Client Time:* ${clientTime}` },
        { type: "mrkdwn", text: `*💼  Project Budget:* ${projectBudget}` },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Reply to the invitation back <${replyUrl}|here>`,
      },
    },
    { type: "divider" },
  ]; }

/* Send Slack message using params */
async function sendMessageToSlack(params) {
  const blocks = buildInviteBlocks(params);

  return slackApp.client.chat.postMessage({
    channel: process.env.SLACK_CHANNEL,
    blocks: blocks,
    
  });
}

module.exports = {
  sendMessageToSlack,
};