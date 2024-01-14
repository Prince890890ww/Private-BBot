module.exports = {
 config: {
   name: "kare koili",
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
 if (event.body && event.body.toLowerCase() === "kare koili") {
 return message.reply({
 body: "যে সালা বলছে তার মুখে মুইত্তা দে🖕",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Rh1DwRK/image.jpg")
 });
 }
 }
}