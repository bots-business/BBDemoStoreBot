/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Common
  answer: 
  keyboard: 
  aliases: 💰 balance
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
Bot.sendMessage("Balance, BTC: " + res.value());
