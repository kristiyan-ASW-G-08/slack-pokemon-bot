'use strict';
const SlackBot = require('slackbots');
const handleMessage = require('./handleMessage');
const token = 'Your Token';
const name = 'PokeBot';
const icon_emoji = 'Emoji code';
const bot = new SlackBot({
  token,
  name
});

const params = {
  icon_emoji
};
bot.on('start', () => {
  bot.postMessageToChannel('general', 'Gotta catch them all', params);
});

bot.on('error', err => {
  throw err;
});

bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  } else {
    handleMessage(data.text, bot, params);
  }
});
