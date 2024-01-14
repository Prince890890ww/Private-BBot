module.exports = {
 config: {
   name: "picta kmn hoiche",
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
 if (event.body && event.body.toLowerCase() === "picta kmn hoiche?") {
 return message.reply({
 body: "বাহ🙂",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/kM5Mkzn/image.jpg")
 });
 }
 }
}