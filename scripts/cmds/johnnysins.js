module.exports = {
 config: {
   name: "johnny sins",
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
 if (event.body && event.body.toLowerCase() === "johnny sins") {
 return message.reply({
 body: " johnny sins-Details😶",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/XW31DYf/image.jpg")
 });
 }
 }
}