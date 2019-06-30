/*CMD
  command: 👛 My wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Permanent Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("wallet");

if(wallet){
  Bot.sendMessage("`" + wallet + "`");
}else{
  Bot.runCommand("/createWallet");
}
