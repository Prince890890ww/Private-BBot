module.exports = {
 config: {
   name: "tor nanir khalighor",
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
 if (event.body && event.body.toLowerCase() === "tor nanir khalighor") {
 return message.reply({
 body: "তোর নানিরে চু*দি",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/58Mr72x/image.jpg")
 });
 }
 }
}