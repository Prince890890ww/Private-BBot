module.exports = {
 config: {
   name: "siam edit kor",
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
 if (event.body && event.body.toLowerCase() === "siam edit kor") {
 return message.reply({
 body: "আগে মুইত্তা লই😑",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/8MtB2Fc/image.jpg")
 });
 }
 }
}