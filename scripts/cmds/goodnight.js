module.exports = {
 config: {
   name: "good night",
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
 if (event.body && event.body.toLowerCase() === "good night") {
 return message.reply({
 body: "good night😴",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/mDF63mw/image.gif")
 });
 }
 }
}