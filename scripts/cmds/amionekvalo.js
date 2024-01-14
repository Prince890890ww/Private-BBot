module.exports = {
 config: {
   name: "ami onek valo",
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
 if (event.body && event.body.toLowerCase() === "ami onek valo") {
 return message.reply({
 body: "বোকাচো*দা কয় কি😹",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/HnKsg0K/image.jpg")
 });
 }
 }
}