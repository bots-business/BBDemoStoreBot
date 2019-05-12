/*CMD
  command: /onpaymentcompleted
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// you can inspect all options
// Bot.sendMessage(inspect(options));

Bot.sendMessage("Payment completed");

let amount = options.amount1;

let res = Libs.ResourcesLib.userRes("balance");
res.add(amount)

Bot.sendMessage("added to balance, BTC: " + amount);
