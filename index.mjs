import Slack from '@slack/bolt';
import dotenv from 'dotenv';

dotenv.config();

const app = new Slack.App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

const blocks = [{
			"type": "rich_text",
			"elements": [
				{
					"type": "rich_text_section",
					"elements": [
						{
							"type": "text",
							"text": "📢 A new invitation receival on your Upwork account! Reply fast!",
							"style": {
								"bold": true
							}
						}
					]
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Wordpress expert developer needed *\n We are looking for a Wordpress expert developer for a new website with multilingual feature and payment gateway integration, Figma designs are ready and will be handed over to the right..."
			}
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "*🌍  Country:* United Kingdom"
				},
				{
					"type": "mrkdwn",
					"text": "*⭐   Client Rate:* 4.95 (1528 reviews) "
				},
				{
					"type": "mrkdwn",
					"text": "*💰  Total Spent:* $250K "
				},
				{
					"type": "mrkdwn",
					"text": "*💵   Averate Hourly Rate:* $34.7"
				},
				{
					"type": "mrkdwn",
					"text": "*🕒  Client Time:* 9:31 AM"
				},
				{
					"type": "mrkdwn",
					"text": "*💼  Project Budget:* $3600"
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Reply to the invitation back <https://google.com|here>"
			}
		},
		{
			"type": "divider"
		}
	];
    
await app.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    blocks: blocks,
});