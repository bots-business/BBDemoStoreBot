/*CMD
  command: /pay
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let amount = params;
amount = parseFloat(amount);

options = {
  fields: {
     amount: amount,   // amount in BTC
     currency: "BTC",  // currency1 = currency2 = BTC
     // currency1: "BTC",   // The original currency of the transaction
     // currency2: "LTC"  //The currency the buyer will be sending
     // you can use another fields also
     // except custom and ipn_url (it used by Lib)
     // See https://www.coinpayments.net/apidoc-create-transaction
  },
  // generated wallet, QR code, payment page
  // will be available in this command
  onSuccess: '/onCreatePayment',
  
  // on successful payment this command
  // will be executed
  onPaymentCompleted: "/onPaymentCompleted",
  
  // it is not necessary
  onIPN: "/onIPN"
}

Libs.CoinPayments.createTransaction(options);
