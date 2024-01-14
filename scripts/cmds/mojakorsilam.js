module.exports = {
 config: {
   name: "moja korsilam",
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
 if (event.body && event.body.toLowerCase() === "moja korsilam") {
 return message.reply({
 body: "মস্কারি চু*দাও😾",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/qr8rJwW/image.jpg")
 });
 }
 }
}