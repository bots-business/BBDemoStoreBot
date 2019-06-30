/*CMD
  command: /onCreatePayment
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect all options:
// Bot.sendMessage(inspect(options));

let result = options.result;

let msg = "*Need pay:*\n `" + result.amount + "`" + 
 "\n\n*to address:*\n" +
 "`" + result.address + "`" +
 "\n\n [Checkout](" + result.checkout_url + ") | [Status](" + result.status_url + ")" + 
 "\n\nCheck status manually: /check" + options.payment_index;

Bot.sendMessage(msg);
Api.sendPhoto({ photo: result.qrcode_url }); 






