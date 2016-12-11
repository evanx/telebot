# Telebot

Simple webhook server, intended for incoming updates from Telegram, published via Redis.

For example, invoke `https://api.telegram.org/botTOKEN/setWebhook` with the URL for this Telebot NodeJS webserver and location `/webhook/SECRET.`

Your bot should then subscribe to the Redis channel `telebot:SECRET` in order to receive these updates via Telegram.org webhook.

Note that your bot would reply to chat commands using https://api.telegram.org/botTOKEN/sendMessage`
