/*CMD
  command: /onWalletCreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));

let wallet = options.result.address;
Bot.sendMessage("Your permanent wallet address is:\n`" + wallet + "`")

User.setProperty("wallet", wallet, "string");
