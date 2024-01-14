module.exports = {
 config: {
   name: "i love you",
   version: "1.0",
   author: "Siam",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "i love you") {
 return message.reply({
 body: "ভালোবাসা তোর পুটকিতে দিবো",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/HCS0rwj/image.jpg")
 });
 }
 }
}