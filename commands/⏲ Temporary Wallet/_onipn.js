/*CMD
  command: /onipn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⏲ Temporary Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect all fields:
// Bot.sendMessage(inspect(options))

// IPN is not needed
// Use - onPaymentCompleted

Bot.sendMessage("IPN: Payment status: " + options.status_text );





