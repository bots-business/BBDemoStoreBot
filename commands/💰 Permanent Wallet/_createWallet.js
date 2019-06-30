/*CMD
  command: /createWallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💰 Permanent Wallet
  answer: 
  keyboard: 
  aliases: 🔄 new wallet
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "BTC",
  label: "myLabel",
  onSuccess: "/onWalletCreation",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/onIncome"
});
