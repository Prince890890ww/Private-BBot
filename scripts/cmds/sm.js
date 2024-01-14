module.exports = {
    config: {
        name: "sm",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "sm") return message.reply("কিরে তোরা নাকি আমাদের সাথে লাগতে চাচ্ছিস😌

ভাই ওখোনো সময় আছে পালা এখান থেকে😌

সিয়াম বস,মুন্না বস,নাজমুল বস আসার সময় হয়ে গেছে🫡

চুদন খাওয়ার জন্য প্রস্তুত থাক 🥹

সাথে Legend বাহিনি:1.Tor abba siam 2.Legendery bot 3.danger bot 

ভুল মানুষের সাথে পাংগা নিলি রে এবার চুদন খা👌");
}
};