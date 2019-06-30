/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Common
  answer: Keys setupped - OK
  keyboard: 
  aliases: 
CMD*/


Bot.sendMessage("It is demo bot. Setup is not allowed")
return  // remove this line

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("YOUR KEY");
Libs.CoinPayments.setPublicKey('YOUR KEY');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('YOUR API KEY');
