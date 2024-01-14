module.exports = {
    config: {
        name: "siamteam",
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
    if (event.body && event.body.toLowerCase() == "siamteam?") return message.reply("কিরে তোরা নাকি আমাদের সাথে লাগতে চাচ্ছিস😌,,,,,ভুল মানুষের সাথে পাংগা,,নিলিরে জাই হোক তোর বাপেরা আসলো বলে সালাম দে,,Siam,munna,najmul");
}
};");
}
};