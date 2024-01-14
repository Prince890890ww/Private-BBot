module.exports = {
    config: {
        name: "mm",
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
    if (event.body && event.body.toLowerCase() == "mm") return message.reply("কিরে খনিকের ছেলেরা তোরা নাকি আমাদের সাথে লাগতে চাচ্ছিস…🙂.......................................................................................সামলাতে পারবিতো?................................পরে আবার কাদিসনা কারোন তোদের আব্বু আস্তেছে সালাম দে................... Siam,munna,najmul");
}
};