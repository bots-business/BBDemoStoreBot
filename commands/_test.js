/*CMD
  command: /test
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.callTestPermanentWalletIncome({
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/onIncome"
});
