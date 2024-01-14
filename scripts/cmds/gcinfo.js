module.exports = {
    config: {
        name: "gcinfo",
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
    if (event.body && event.body.toLowerCase() == "gcinfo") return message.reply("(Only legend allow)-(dholai-group) সব লিজেন্ড😌 এই গ্রুপ মুরগি চোদার জন্য আসোল গ্রুপ নাম :(only legend allow)");
}
};