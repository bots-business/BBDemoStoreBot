/*CMD
  command: /onIncome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.address;
let currency = options.currency;
let amount = options.amount;

let fiat_amount = options.fiat_amount;
let fiat_currency = options.fiat_coin;

let fee = options.fee;

let txn_id = options.txn_id

// see another fields by
// Bot.sendMessage(inspect(options));

Bot.sendMessage(
   "*Income to wallet:*" +
   "\n`"+ wallet + "`" +
   "\n\n*Amount*:\n" +
amount + " " + currency + " (" + fiat_amount + " " + fiat_currency + ")" +
   "\n*Fee*: " + fee +
   "\n\nTXN: `" + txn_id + "`"
);


let res = Libs.ResourcesLib.userRes("balance");
res.add(amount)

Bot.sendMessage("Added to balance, BTC: " + amount);
