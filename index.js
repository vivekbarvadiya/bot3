const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

module.exports = async (req, res) => {
  // Ensure Vercel-compatible response handling
  try {
    // Handle Telegram bot events here if needed
    // For example, echo command
    bot.onText(/\/echo(.+)/, (msg, match) => {
      let chatId = msg.chat.id;
      let resp = match[1];
      bot.sendMessage(chatId, resp);
    });

    res.status(200).send('Telegram bot running');
  } catch (error) {
    console.error('Error occurred:', error.toString());
    res.status(500).send('Internal Server Error');
  }
};
