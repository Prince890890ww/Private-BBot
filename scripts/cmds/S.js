module.exports = {
    config: {
        name: "S",
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
    if (event.body && event.body.toLowerCase() == "S") return message.reply("মনে রাখিস তদের আব্বু দের গ্রুপের নাম (only legend allow)");
}
};