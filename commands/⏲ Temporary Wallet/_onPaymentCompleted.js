/*CMD
  command: /onPaymentCompleted
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⏲ Temporary Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Payment completed");

let amount = options.amount1;

let res = Libs.ResourcesLib.userRes("balance");
res.add(amount)

Bot.sendMessage("Added to balance, BTC: " + amount);


// you can inspect all options
// Bot.sendMessage(inspect(options));
