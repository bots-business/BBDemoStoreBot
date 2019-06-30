/*CMD
  command: /on_txn_id
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⏲ Temporary Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect all options:
// Bot.sendMessage(inspect(options));

Bot.sendMessage(options.result.status_text);

// Do not finish payment here.
// Use /onPaymentCompleted for this

