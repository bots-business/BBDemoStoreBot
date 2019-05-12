/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// For checkX commands, where X is any numbers

if(message.indexOf('/check') + 1){
  let payment_index = message.split("/check")[1]
  Libs.CoinPayments.getTxInfo({
     payment_index: payment_index,
     onSuccess: '/on_txn_id'
  })
}
